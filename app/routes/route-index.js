module.exports = (app)=>{
	app.get('/', (req, res)=>{

		const connection = app.config.dbConnection()
		const crud = new app.app.modules.crud(connection)

		crud.recuperarTarefas((error, result)=>{
			res.render('index.ejs', {tarefas : result})
		})
	})
}