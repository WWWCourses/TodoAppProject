const addTodo = function(e) {
    // console.dir(e);
    const todoTitle = dom.todoTitleInput.value;

    const li = document.createElement('LI');
    li.innerHTML = `
                <span>${todoTitle}</span>
                <div class="toggle-complete">C</div>
                <div class="bs-4 delete">x</div>
    `
    dom.todoListUl.appendChild(li)
    count+=1;
    dom.todosCount.innerHTML = count;

}

const dom = {
    todoTitleInput:document.querySelector('#todo-title'),
    todoAddBtn: document.querySelector('.todo-add-container>.btn'),
    todoListUl:document.querySelector('.todo-list ul'),
    todosCount:document.querySelector('.todos-count>span')
}

let count = 0;

dom.todoAddBtn.addEventListener('click', addTodo )
dom.todoTitleInput.addEventListener('keypress', function (e) {
    // console.dir(e);
    if(e.keyCode===13){
        addTodo()
    }
})
dom.todoListUl.addEventListener('click', function(e) {
    // console.dir(e.target);
    // console.log(e.target.className);
    // console.log(e.target.classList.contains('delete'));
    if(e.target.classList.contains('delete')){
        const parent = e.target.parentElement
        parent.remove()
    }
})

