import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Todo from './components/Todo';
import Input from './components/Input';

//Action creators
import { addTodo, removeTodo, getTodos, markTodo } from './store/actionCreators';

class App extends Component {
    componentDidMount(){
        this.props.GetTodos();
    }

    render() {
        const { todos, AddTodo, RemoveTodo, MarkTodo } = this.props;
        const Todos = todos.map(todo => 
            <Todo 
                key={todo.id} 
                todo={todo} 
                remove={RemoveTodo}
                mark={MarkTodo}
            />
        );

        return (
            <div className="App">
                <h1>Todo app</h1>
                <Input addTodo={AddTodo}/>
                {Todos}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    AddTodo: text => {dispatch(addTodo(text))},
    RemoveTodo: id => {dispatch(removeTodo(id))},
    GetTodos: () => {dispatch(getTodos())},
    MarkTodo: id => {dispatch(markTodo(id))},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);