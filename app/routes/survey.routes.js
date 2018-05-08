var express = require('express')
var controller = require('../controllers/survey.controller')
var router = express.Router()

router.get('/', controller.showMainPage)
router.post('/inputname', controller.showResult)
router.get('/register',controller.showRegisterForm)
router.post('/registerresult',controller.showRegisterResult)
module.exports = router
