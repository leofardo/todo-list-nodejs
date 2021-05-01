module.exports = (app)=>{
	app.get('/realizados', (req, res)=>{

		const connection = app.config.dbConnection()
		const crud = new app.app.modules.crud(connection)

		crud.recuperarTarefas('realizados', (error, result)=>{
			res.render('index.ejs', {tarefas : result})
		})
	})
}