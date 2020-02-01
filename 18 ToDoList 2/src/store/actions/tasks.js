import { 
    GET_TIMER, 
    ADD_TASK, 
    REMOVE_TASK, 
    UPDATE_TIMER, 
    STOP_TASK, 
    START_TASK, 
    CLEAR_TASKS
} from './actionTypes';

export const getTimer = (id) => {
    return {
        type: GET_TIMER,
        id: id
    };
};

export const updateTimer = (id, timer) => {
    return {
        type: UPDATE_TIMER,
        id: id,
        timer: timer
    };
};

export const addTask = (id, value, intervalId) => {
    return {
        type: ADD_TASK,
        item: { id: id, value: value, completed: false, timer: { hours: null, minutes: null, seconds: null }},
        intervalId: intervalId
    };
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id: id
    };
};

export const clearTasks = () => {
    return {
        type: CLEAR_TASKS
    };
};

export const stopTask = (id) => {
    return {
        type: STOP_TASK,
        id: id
    };
};

export const startTask = (id, intervalId) => {
    return {
        type: START_TASK,
        id: id,
        intervalId: intervalId
    };
};