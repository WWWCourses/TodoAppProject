const addTodo = function() {
    // make id
    const lastTodoId = todos[todos.length-1].id;

    const todoTitle = dom.todoTitleInput.value;
    const newTodo = {
        'id': lastTodoId+1,
        'title': todoTitle,
        'completed': false
    }

    // change state
    todos.push(newTodo)

    // render UI
    render(todos)
}

const removeTodo = function(id) {
    // change state
    todos = todos.filter(todo=>todo.id*1!=id)
    console.dir(todos);
    // render UI
    render(todos)
}

const render = function(todos) {
    dom.todoListUl.innerHTML='';
    todos.forEach(todo => {
        const liStr = `
            <li data-id=${todo.id}>
                <span>${todo.title}</span>
                <div class="toggle-complete">C</div>
                <div class="bs-4 delete">x</div>
            </li>
        `
        dom.todoListUl.innerHTML += liStr
    });

    dom.todosCount.innerHTML = todos.length;
}

const dom = {
    todoTitleInput:document.querySelector('#todo-title'),
    todoAddBtn: document.querySelector('.todo-add-container>.btn'),
    todoListUl:document.querySelector('.todo-list ul'),
    todosCount:document.querySelector('.todos-count>span')
}


// initialize state
let todos = [
    {
        'id':1,
        'title':'Learn JS',
        'completed': true
    },
    {
        'id':2,
        'title':'Learn React',
        'completed': false
    },
]

window.addEventListener("load", (event) => {
    render(todos)
});

dom.todoAddBtn.addEventListener('click', addTodo )
dom.todoTitleInput.addEventListener('keypress', function (e) {
    if(e.keyCode===13){
        addTodo()
    }
})
dom.todoListUl.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        const id=li.dataset.id;
        console.log(id);
        removeTodo(id)
    }
})

