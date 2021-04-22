const app = require('./config/server.js')

const index = require('./app/routes/route-index.js')(app)

app.listen(3000, ()=>{
	console.log('Servidor ON na porta 3000')
})