module.exports = (app)=>{
	app.get('/pendentes', (req, res)=>{

		const connection = app.config.dbConnection()
		const crud = new app.app.modules.crud(connection)

		crud.recuperarTarefas('pendentes', (error, result)=>{
			res.render('index.ejs', {tarefas : result})
		})
	})
}