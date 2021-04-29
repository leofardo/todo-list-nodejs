module.exports = (app)=>{
	app.get('/edit/:id', (req, res)=>{
		let id = req.params.id
		let novoNome = req.query.name

		const connection = app.config.dbConnection()
		const crud = new app.app.modules.crud(connection)

		crud.editarTarefa(id, novoNome, (error, result)=>{
			res.redirect('/')
		})

	})
}