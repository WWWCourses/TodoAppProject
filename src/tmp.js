
const removeTodo = function(id) {
    todos = todos.filter(todo=>todo.id!==id)
}

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


removeTodo(2);
console.log(todos);