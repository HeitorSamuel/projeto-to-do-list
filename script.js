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
        var botaodel = document.createElement('input')
        botaodel.setAttribute('class', 'botao-del')

        telatasks.appendChild(tasks)
        
        tasks.appendChild(txttask)
        
        tasks.appendChild(botaodel)
        
    
    }
}