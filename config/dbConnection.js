const mysql = require('mysql')

const conMySql = ()=>{
	console.log('O servidor recebeu uma requisição')
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'1234',
		database:'todoListApp'
	})
}

module.exports = ()=>{
	console.log('O servidor está pronto para receber requisições')
	return conMySql
}

// CREATE database todoListApp;
// CREATE TABLE tarefas(
// 	id int(4) AUTO_INCREMENT PRIMARY KEY,
// 	tarefa varchar(50) NOT NULL,
// 	data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );