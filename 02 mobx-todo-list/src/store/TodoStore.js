import { observable, action } from "mobx";

const ob = observable({
    todoList: observable.map({
    }),
});

const addTodo = action((todoId, name) => {
    ob.todoList.set('todo'+todoId, {
        id: todoId, 
        name: name,
        completed: false,
    });
});

const removeTodo = action((todoId) => {
    ob.todoList.delete('todo'+todoId);
})

const checkTodo = action((todoId) => {
    let todo = ob.todoList.get('todo'+todoId);
    todo.completed = !todo.completed;
})

const getFilteredTodos = (filterStatus) => {
    let filteredTodos = [];
    switch(filterStatus) {
        case 0: 
            filteredTodos = ob.todoList
        break;
        case 1: 
            ob.todoList.forEach((todo, key) => {
                if(!todo.completed) {
                    filteredTodos.push(todo);
                }
            })
        break;
        case 2: 
        ob.todoList.forEach((todo, key) => {
            if(todo.completed) {
                filteredTodos.push(todo);
            }
        })
        break;
        default: 
        break;
    }
    return filteredTodos;
};

var TodoStore = {
    ob,
    addTodo,
    removeTodo,
    checkTodo,
    getFilteredTodos
};

export default TodoStore;