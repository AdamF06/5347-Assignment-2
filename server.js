var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
var session = require('express-session');

var survey = require('./app/routes/survey.routes')

var app = express()
app.set('views', path.join(__dirname,'app/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/', survey)

app.listen(3000, function () {
console.log('survey app listening on port 3000!')
})
