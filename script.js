function adicionar(){
    var txtinput = document.querySelector('#txtinput')
    if (txtinput.value.length == 0){
        window.alert('Digite uma tarefa antes de adicionar!')
    }else{
        var telatasks = document.querySelector('.tela-task')
        
        var tasks = document.createElement('div')
        tasks.setAttribute('class', 'tasks')
        
        var txttask = document.createElement('div')
        txttask.setAttribute('class', 'texto-task')
        txttask.textContent = (txtinput.value)

        var divbotoes = document.createElement('div')
        divbotoes.setAttribute('class', 'botoes-task')
        
        var botaodel = document.createElement('button')
        botaodel.setAttribute('class', 'botao-del')
        botaodel.setAttribute('onclick', 'excluir(this)')

        var iconedel = document.createElement('i')
        iconedel.setAttribute('class', 'fa-solid fa-xmark')

        var botaoedit = document.createElement('button')
        botaoedit.setAttribute('class', 'botao-edit')

        var iconeedit = document.createElement('i')
        iconeedit.setAttribute('class', 'fa-solid fa-pen-to-square')


        telatasks.appendChild(tasks)
        
        tasks.appendChild(txttask)
        
        tasks.appendChild(divbotoes)
        
        divbotoes.appendChild(botaodel)

        divbotoes.appendChild(botaoedit)

        botaodel.appendChild(iconedel)

        botaoedit.appendChild(iconeedit)

        txtinput.value = ''
        
        txtinput.focus()
    }
}

function excluir(button){
    button.parentElement.remove()
}