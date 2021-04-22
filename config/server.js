const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

const public = __dirname.substr(0,55)
app.use(express.static(public + '/public'))

module.exports = app