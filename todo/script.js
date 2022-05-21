const dom = {
    new: document.getElementById('new'),  
    add: document.getElementById('add'), 
    lst: document.getElementById('lst') 
}

const taskList = [];
let allTasksHtml = ''

//Отслеживает клик по кнопке "Добавить задачу"
dom.add.onclick = () => {
    const task = dom.new.value
    if(task) {
        addTask(task)
        dom.new.value = ''
    }
}

//Добавляет задачу
function addTask(text) {
    const index = taskList.findIndex((task) => {
        return task.text === text
    })
    if(index === -1) {
        const timeTamp = Date.now()
        const task = {
            id: timeTamp,
            text,
            isComplete: false
        }
        taskList.push(task)
        tasksRender(task)
    }
    else {
        alert(-1)
    }
}

// Функция вывода задач
 function tasksRender(task) {
    let ul = document.getElementById('lst')
    let li = document.createElement('li')
    const liHtml =
    `<div class="todo_task">
    <label class="todo_checkbox">
    <input type="checkbox" class="check"> 
        <div></div>
    </label>
    <div class="todo_task_text">
        ${task.text}
    </div>
    <button class="button_del">-</button>
    </div>`
    li.innerHTML = liHtml
    ul.appendChild(li)
}


// Отслеживание клика по checkbox'y
dom.lst.onclick = (event) => {
    const target = event.target
    const task = target.parentElement.parentElement
    const taskStatus = target.checked
    if(target.classList.contains('check')) {
        if(taskStatus) {
            task.childNodes[3].style.opacity = 0.5
            task.childNodes[3].style.textDecoration = 'line-through';
        }
        else {
            task.childNodes[3].style.opacity = 1
            task.childNodes[3].style.textDecoration = '';
        }
    }
    if(target.classList.contains('button_del')) {
        console.dir(task)
        let ul = document.getElementById('lst')
        ul.removeChild(task)
        const index = taskList.findIndex((tsk) => {
            return tsk.text === task.childNodes[0].childNodes[3].textContent
        })
        taskList.splice(index, 1)
    }
}
