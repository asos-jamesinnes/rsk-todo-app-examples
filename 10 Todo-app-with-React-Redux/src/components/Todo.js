import React from 'react';

const Todo = props => {
    return (
        <div className="todo">
            <button className="btn remove-btn" onClick={() => props.remove(props.todo.id)}>X</button>
            <div className="text" style={props.todo.marked ? styleMarked : {}}>{props.todo.text || 'Todo text'}</div>
            <button className="btn mark-btn" onClick={() => props.mark(props.todo.id)}>Done</button>
        </div>
    );
};

export default Todo;

const styleMarked = {
    textDecorationLine: 'line-through'    
}