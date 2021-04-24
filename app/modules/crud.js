class CRUD{
	constructor(connection){
		this.connection = connection
	}
	recuperarTarefas(callback){
		this.connection.query('select * from tarefas', callback)
	}
}

module.exports = ()=>{
	return CRUD
}