import { ADD_TODO, REMOVE_TODO, GET_TODOS, MARK_TODO } from './actionCreators';

const initState = {
    todos: [],
    currentID: 1
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case ADD_TODO:{
            console.log(state);
            const newTodos = [...state.todos, {
                text: action.text,
                marked: false,
                id: state.currentID
            }];
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: newTodos,
                currentID: state.currentID + 1
            };
        }

        case REMOVE_TODO:{  
            const newTodos = state.todos.filter(todo => todo.id !== action.id);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: newTodos
            }
        }

        case GET_TODOS: {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            const newID = todos.length > 0 ? todos.reverse()[0].id + 1 : 1;
            return {
                ...state,
                todos,
                currentID: newID
            }
        }

        case MARK_TODO: {
            const todos = state.todos.map(todo => {
                if(todo.id === action.id) return {...todo, marked: !todo.marked};
                return todo;
            });
            return {
                ...state,
                todos: todos
            };
        }

        default:
            return state;
    }
}

export default reducer;