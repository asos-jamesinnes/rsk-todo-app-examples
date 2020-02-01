import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NewTask from '../NewTask/NewTask';
import List from '../../components/UI/List/List';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTaskIsOpen: false
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.todoList !== this.props.todoList && Array.isArray(this.props.todoList) && this.props.todoList.length){
            localStorage.setItem('todoList', JSON.stringify(this.props.todoList));
        }
    }

    updateTimer = (itemId) => {
        const activeItem = this.props.todoList.find(item => item.id === itemId) || null;
        if(!!activeItem){
            const oldTimer = {...activeItem.timer};
            const timer = {
                hours: ((oldTimer.minutes === 59 && oldTimer.seconds === 59) ? (oldTimer.hours+1) : oldTimer.hours),
                minutes: (oldTimer.seconds === 59 ? (oldTimer.minutes+1) : oldTimer.minutes), 
                seconds: (oldTimer.seconds === 59 ? 0 : (oldTimer.seconds+1))
            };
        
            this.props.onUpdateTimer(itemId, timer);
        }
    }

    handleOpenNewTask = () => {
        this.setState(prevState => ({ newTaskIsOpen: !prevState.newTaskIsOpen }));
    };

    handleCloseNewTask = () => {
        this.setState({newTaskIsOpen: false});
    }

    handleAddTask = (value) => {
        if(typeof value === 'string' && value.length) {
            if(typeof this.props.intervalId === 'number'){
                window.clearInterval(this.props.intervalId);
            }
            const newItemId = Date.now();
            const intervalId = window.setInterval(this.updateTimer, 1000, newItemId);
            this.props.onAddTask(newItemId, value, intervalId);
            this.setState({newTaskIsOpen: false});
        }
    }

    handleRemoveTask = (id) => {
        this.props.onRemoveTask(id);
    }

    handleStopTask = (id) => {
        if(typeof this.props.intervalId === 'number'){
            window.clearInterval(this.props.intervalId);
        }

        this.props.onStopTask(id);
    }

    handleStartTask = (id) => {
        if(typeof this.props.intervalId === 'number'){
            window.clearInterval(this.props.intervalId);
        }
        const intervalId = window.setInterval(this.updateTimer, 1000, id);
        
        this.props.onStartTask(id, intervalId);
    }

    handleClearTasks = () => {
        localStorage.removeItem('todoList');
        this.props.onClearTasks();
    }

    render() {
        return (
            <div className="container">
                <List items={this.props.todoList} handleStopTask={this.handleStopTask} handleStartTask={this.handleStartTask} handleRemoveTask={this.handleRemoveTask}/>
                <div className={['content', 'flex', 'flex--justify-between'].join(' ')}>
                    <Fab color="primary" aria-label="Add" onClick={this.handleOpenNewTask}>
                        <AddIcon />
                    </Fab>
                    <span>
                        <Fab {...(!this.props.todoList.length && {disabled: true})} aria-label="Delete" onClick={this.handleClearTasks}>
                            <DeleteIcon />
                        </Fab>
                    </span>
                </div>
                <NewTask 
                    isOpen={this.state.newTaskIsOpen} 
                    handleClose={this.handleCloseNewTask} 
                    handleAddTask={this.handleAddTask}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.tasks.list,
        intervalId: state.tasks.intervalId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: (id, value, intervalId) => dispatch(actions.addTask(id, value, intervalId)),
        onRemoveTask: (id) => dispatch(actions.removeTask(id)),
        onClearTasks: () => dispatch(actions.clearTasks()),
        onStopTask: (id) => dispatch(actions.stopTask(id)),
        onStartTask: (id, intervalId) => dispatch(actions.startTask(id, intervalId)),
        onUpdateTimer: (id, timer) => dispatch(actions.updateTimer(id, timer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
