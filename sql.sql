CREATE database todoListApp;
CREATE TABLE tarefas(
	id int(4) AUTO_INCREMENT PRIMARY KEY,
	tarefa varchar(50) NOT NULL,
	data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	realizada boolean NOT NULL
);