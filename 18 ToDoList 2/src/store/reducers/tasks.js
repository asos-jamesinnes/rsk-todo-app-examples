import { GET_TIMER, ADD_TASK, REMOVE_TASK, CLEAR_TASKS, UPDATE_TIMER, STOP_TASK, START_TASK } from '../actions/actionTypes';

const initialList = localStorage.getItem('todoList') && Array.isArray(JSON.parse(localStorage.getItem('todoList'))) ? (
    JSON.parse(localStorage.getItem('todoList')).map(item => !item.completed ? ({...item, ...{completed: true}}) : item)
) : ([{
    id: 1, value: 'Build a ToDo app', completed: true, timer: { hours: 4, minutes: 3, seconds: 9 }
}]);

const initialState = {
    list: [...initialList ],
    timer: null,
    intervalId: null
};

const addTask = (state, action) => ({
    ...state, 
    ...{ 
        list: [...state.list.map(task => ({...task, ...{completed: true}})), action.item], 
        intervalId: action.intervalId 
    }
});

const removeTask = (state, action) => ({
    ...state, 
    ...{ list: state.list.filter(task => task.id !== action.id) }
});

const clearTasks = (state, action) => ({
    ...state, 
    ...{ list: [] }
});

const stopTask = (state, action) => ({
    ...state, 
    ...{ list: state.list.map(task => task.id === action.id ? ({...task, ...{completed: true}}) : task) }
});

const startTask = (state, action) => ({
    ...state, 
    ...{ 
        list: state.list.map(task => task.id === action.id ? ({...task, ...{ completed: false }}) : ({...task, ...{completed: true}})), 
        intervalId: action.intervalId
    }
});

const getTimer = (state, action) => ({
    ...state, 
    ...{ timer: state.find(timer => timer.id === action.id) || null }

});

const updateTimer = (state, action) => ({
    ...state, 
    ...{ list: state.list.map(task => task.id === action.id ? ({...task, ...{ timer: {...action.timer} } }) : task) }
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: return addTask(state, action);
        case REMOVE_TASK: return removeTask(state, action);
        case CLEAR_TASKS: return clearTasks(state, action);
        case STOP_TASK: return stopTask(state, action);
        case START_TASK: return startTask(state, action);
        case GET_TIMER: return getTimer(state, action);
        case UPDATE_TIMER: return updateTimer(state, action);
        default: return state;
    }
};

export default reducer;