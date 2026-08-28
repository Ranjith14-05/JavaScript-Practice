let todoList =[];

function addtask(){
    let task = document.querySelector('.inp').value;
    todoList.push(task);
    console.log(todoList);
    document.querySelector('.inp').value = '';
    renderTask();
}

function renderTask(){
    document.querySelector('.out').innerHTML = '';
    
    for(let i =0 ; i < todoList.length; i++){
        document.querySelector('.out')
            .innerHTML += `<p>${todoList[i]}</p>`;
    }
}
