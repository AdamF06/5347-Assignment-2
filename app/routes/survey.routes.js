var express = require('express')
var passport = require ('passport')
var controller = require('../controllers/survey.controller')
var loginController = require ('../controllers/login.controller')
var router = express.Router()

router.get('/', controller.showMainPage)
router.post('/inputname', controller.showResult)
router.get('/register',controller.showRegisterForm)
router.post('/registerresult',controller.showRegisterResult)
router.post ('/api/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: 'Invalid Username or Password.'
}))
module.exports = router
