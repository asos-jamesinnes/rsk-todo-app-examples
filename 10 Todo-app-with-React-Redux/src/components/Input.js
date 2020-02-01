import React, { Component } from 'react';

class Input extends Component {
    state = {
        newTodo: ''
    }

    handleChange = e => {
        this.setState({
            newTodo: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { newTodo } = this.state;        
        if(newTodo.trim() !== ''){
            this.props.addTodo(newTodo);
            this.setState({newTodo: ''})
        };
    }

    render() {
        const { newTodo } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={newTodo} onChange={this.handleChange}/>
                <button>Add todo</button>
            </form>
        );
    }
}

export default Input;