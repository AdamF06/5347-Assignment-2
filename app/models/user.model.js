var mongoose = require ('mongoose')

var userSchema = mongoose.Schema ({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String
})

var User = mongoose.model ('user', userSchema)

module.exports = User