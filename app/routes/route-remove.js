module.exports = (app)=>{
	app.get('/remover/:id', (req, res)=>{
		const id = req.params.id
		const connection = app.config.dbConnection()
		const crud = new app.app.modules.crud(connection)

		crud.removerTarefa(id, (error, result)=>{
			res.redirect('/')
		})
	})
}