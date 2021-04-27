const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', './app/views')

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/modules/crud.js')
	.into(app)

const public = __dirname.substr(0,55)
app.use(express.static(public + '/public'))

module.exports = app