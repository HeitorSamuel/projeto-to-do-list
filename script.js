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
        
        var botaodel = document.createElement('button')
        botaodel.setAttribute('class', 'botao-del')
        var icone = document.createElement('i')
        icone.setAttribute('class', 'fa-solid fa-xmark')


        telatasks.appendChild(tasks)
        
        tasks.appendChild(txttask)
        
        tasks.appendChild(botaodel)

        botaodel.appendChild(icone)

        txtinput.value = ''
        
        txtinput.focus()
    }
}

function excluir(){
    var task = document.querySelector('.tasks')
    task.remove('.task')
}