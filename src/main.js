const dom = {
    todoTitleInput:document.querySelector('#todo-title'),
    todoAddBtn: document.querySelector('.todo-add-container>.btn'),
    todoListUl:document.querySelector('.todo-list ul')
}


dom.todoAddBtn.addEventListener('click', function(e) {
    console.dir(e);
    const todoTitle = dom.todoTitleInput.value;

    const li = document.createElement('LI');
    li.innerHTML = `
                <span>${todoTitle}</span>
                <div class="toggle-complete">C</div>
                <div class="delete">x</div>
    `
    dom.todoListUl.appendChild(li)

})

dom.todoListUl.addEventListener('click', function(e) {
    console.log(e.target);
})

