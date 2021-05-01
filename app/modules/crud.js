class CRUD{
	constructor(connection){
		this.connection = connection
	}
	recuperarTarefas(tipo, callback){
		if(tipo === 'todos'){
			this.connection.query('select * from tarefas', callback)
		}else if(tipo === 'pendentes'){
			this.connection.query('select * from tarefas where realizada = false', callback)
		}else if(tipo === 'realizados'){
			this.connection.query('select * from tarefas where realizada = true', callback)
		}
	}

	removerTarefa(id, callback){
		this.connection.query(`delete from tarefas where id = ${id}`, callback)
	}

	adicionarTarefa(tarefa, callback){
		this.connection.query(`insert into tarefas(tarefa, realizada)values('${tarefa}', 0)`, callback)
	}

	editarTarefa(id, tarefa, callback){
		this.connection.query(`update tarefas set tarefa = '${tarefa}' where id = ${id}`, callback)
	}

	checkTarefa(id, callback){
		this.connection.query(`update tarefas set realizada = true where id = ${id}`, callback)
	}
}

module.exports = ()=>{
	return CRUD
}