var bcrypt = require ('bcrypt')
var User = require ('../models/user.model.js')
var errorHandler = require ('../utils/errorHandler.util.js')
var resGen = require ('../utils/responseGenerator.util.js')
var passport = require ('passport')
var LocalStrategy = require ('passport-local').Strategy

passport.use(new LocalStrategy(
  (username, password, done) => {
    var body = req.body
    var username = body.username
    var password = body.password
    var user
    await User.find ({username}, (err, result) => {
      if (err) {
        errorHandler.handleDatabaseError(err)
        return done (err, false, { message: resGen.getErrorResponse(err) })
      }
      user = result
    })
    if (bcrypt.compareSync(password, user.password)) {
      return done (null, user)
    }
    return done (null, false)
  }
))