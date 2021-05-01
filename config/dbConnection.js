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