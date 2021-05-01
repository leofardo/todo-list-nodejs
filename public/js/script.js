class Button{
	remove(tarefaId){
		window.location = '/remover/'+tarefaId
	}

	edit(tarefaId){
		const tarefaNome = document.querySelector(`#tarefa-${tarefaId} input`).value

		// console.log(tarefaNome)

		window.location = `/edit/${tarefaId}/?name=${tarefaNome}`
	}

	check(tarefaId){
		window.location = `/check/${tarefaId}`
	}
}

class TaskHTML{
	changeHTML(tarefaId){
		this.conteudo = document.querySelector(`#tarefa-${tarefaId} div:nth-child(1)`).innerHTML
		const tarefa = document.getElementById(`tarefa-${tarefaId}`)
		const botoes = document.querySelector(`#tarefa-${tarefaId} div:nth-child(2)`)

		tarefa.removeChild(tarefa.children[0])

		const input = document.createElement('input')
		input.classList = 'input-nome'
		input.style.display = 'flex'
		input.style.alignItems = 'center'
		input.value = `${this.conteudo.trim()}`
		input.setAttribute('maxlength', '30')

		tarefa.prepend(input)

		botoes.innerHTML = ''

		const editar = document.createElement('button')
		editar.innerHTML = '<i class="fas fa-exchange-alt"></i>'
		editar.style.marginRight = '2px'
		editar.setAttribute('onclick', `button.edit(${tarefaId})`)

		const cancelar = document.createElement('button')
		cancelar.innerHTML = 'X'
		cancelar.classList = 'cancelar'
		cancelar.setAttribute('onclick', `taskHTML.oldTask(${tarefaId})`)

		botoes.appendChild(cancelar)
		botoes.appendChild(editar)
	}

	oldTask(tarefaId){
		const tarefa = document.getElementById(`tarefa-${tarefaId}`)

		tarefa.innerHTML = ''

		let divNome = document.createElement('div')
		divNome.classList = 'tarefa-nome'
		divNome.innerHTML = `${this.conteudo}`

		tarefa.appendChild(divNome)


		let divBtn = document.createElement('div')
		divBtn.classList = 'botoes'

		let btnRemove = document.createElement('button')
		btnRemove.classList = 'lixo'
		btnRemove.setAttribute('onclick', `button.remove(${tarefaId})`)
		btnRemove.innerHTML = '<i class="fas fa-trash-alt"></i>'

		let btnChange = document.createElement('button')
		btnChange.setAttribute('onclick', `taskHTML.changeHTML(${tarefaId})`)
		btnChange.innerHTML = '<i class="fas fa-edit"></i>'

		let btnList = document.createElement('button')
		btnList.innerHTML = '<i class="fas fa-check-square"></i>'
		divBtn.appendChild(btnRemove)
		divBtn.appendChild(btnChange)
		divBtn.appendChild(btnList)

		tarefa.appendChild(divBtn)
	}
}

taskHTML = new TaskHTML()
button = new Button()
