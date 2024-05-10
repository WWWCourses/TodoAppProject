"use strict";
const addTodo = function () {
    const todoTitle = dom.todoTitleInput.value;
    const newTodo = {
        'title': todoTitle,
        'completed': false
    };
    // chanve server state
    // endpoint: POST,  http://localhost:3000/todos
    fetch(BASE_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(newTodo)
    })
        .then(resp => {
        if (resp.ok) {
            return resp.json();
        }
    })
        .then(data => {
        // change local state
        todos.push(data);
        // render UI
        render(todos);
    })
        .catch(err => console.log(`ERROR: ${err}`));
};
const removeTodo = function (id) {
    fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
        .then(resp => {
        if (resp.ok) {
            // change local state
            todos = todos.filter(todo => todo.id !== id);
            // render UI
            render(todos);
        }
    })
        .catch(err => console.log(`ERROR: ${err}`));
};
const render = function () {
    dom.todoListUl.innerHTML = '';
    todos.forEach(todo => {
        const liStr = `
            <li data-id=${todo.id}>
                <span>${todo.title}</span>
                <div class="toggle-complete">C</div>
                <div class="bs-4 delete">x</div>
            </li>
        `;
        dom.todoListUl.innerHTML += liStr;
    });
    dom.todosCount.innerHTML = todos.length;
};
const getTodos = function (url) {
    fetch(url)
        .then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        else {
            throw Error(`Error: ${resp.status}`);
        }
    })
        .then(data => {
        todos = [...data];
        render();
    })
        .catch(err => console.error(`Error: ${err}`));
};
const dom = {
    todoTitleInput: document.querySelector('#todo-title'),
    todoAddBtn: document.querySelector('.todo-add-container>.btn'),
    todoListUl: document.querySelector('.todo-list ul'),
    todosCount: document.querySelector('.todos-count>span')
};
const BASE_URL = 'http://localhost:3000/todos';
// initialize state
let todos;
getTodos(BASE_URL);
window.addEventListener("load", (event) => {
    // render(todos)
});
dom.todoAddBtn.addEventListener('click', addTodo);
dom.todoTitleInput.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addTodo();
    }
});
dom.todoListUl.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        const id = li.dataset.id;
        console.log(id);
        removeTodo(id);
    }
});
