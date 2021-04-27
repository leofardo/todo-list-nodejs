module.exports = (app)=>{
	app.get('/criar-tarefa', (req, res)=>{
		res.render('criar-tarefa.ejs')
	})

	app.post('/criar-tarefa', (req, res)=>{
		const tarefa = req.body.tarefa
		
		const connection = app.config.dbConnection()
		const crud = new app.app.modules.crud(connection)

		crud.adicionarTarefa(tarefa, ()=>{
			res.redirect('/')
		})
	})
}