class CRUD{
	constructor(connection){
		this.connection = connection
	}
	recuperarTarefas(callback){
		this.connection.query('select * from tarefas', callback)
	}

	removerTarefa(id, callback){
		this.connection.query(`delete from tarefas where id = ${id}`, callback)
	}

	adicionarTarefa(tarefa, callback){
		this.connection.query(`insert into tarefas(tarefa)values('${tarefa}')`, callback)
	}

	editarTarefa(id, tarefa, callback){
		this.connection.query(`update tarefas set tarefa = '${tarefa}' where id = ${id}`, callback)
	}
}

module.exports = ()=>{
	return CRUD
}