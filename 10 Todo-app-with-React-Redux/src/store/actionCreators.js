export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODOS = 'GET_TODOS';
export const MARK_TODO = 'MARK_TODO';

export const addTodo = text => ({
    type: ADD_TODO,
    text
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});

export const getTodos = () => ({
    type: GET_TODOS
});

export const markTodo = id => ({
    type: MARK_TODO,
    id
});