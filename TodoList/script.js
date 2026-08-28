let todoList =[];


function addtask(){
    let task = document.querySelector('.inp').value;
    let date = document.querySelector('.date-inp').value;
    todoList.push({
        task,
        date
    });
    document.querySelector('.inp').value = '';
    renderTask();
}

function renderTask(){
    document.querySelector('.out').innerHTML = '';
    for(let i =0 ; i < todoList.length; i++){
        const task = todoList[i].task;
        const date = todoList[i].date;
        document.querySelector('.out')
            .innerHTML += `<div>${task}</div>
            <div>${date}</div>
            <button onclick="todoList.splice(${i},1);
            renderTask();" class="del">Delete</button>
            `;
    }
}
let date = document.querySelector('.date-inp').value;