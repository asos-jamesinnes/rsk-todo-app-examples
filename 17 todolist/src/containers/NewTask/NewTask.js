import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '../../components/UI/Modal/Modal';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                id: 'task',
                label: 'Add a todo item',
                placeholder: 'Type some task',
                value: ' '
            }
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.isOpen !== this.props.isOpen){
            this.setState({task: {...this.state.task, ...{ value: '' }}});
        }
    }

    handleInputChange = (event) => {
        this.setState({ task: {...this.state.task, ...{ value: event.target.value }} });
    }

    render(){
        return (
            <Modal isOpen={this.props.isOpen} handleClose={this.props.handleClose}>
                <div>
                    <form>
                        <span className={['display-block'].join(' ')}>
                            <TextField
                                id="standard-with-placeholder"
                                label={this.state.task.label}
                                placeholder={this.state.task.placeholder}
                                margin="normal"
                                value={this.state.task.value}
                                onChange={this.handleInputChange}
                            />
                        </span>
                        <Button
                            variant="contained" 
                            color="primary" 
                            onClick={() => this.props.handleAddTask(this.state.task.value)}
                        >
                            Add
                        </Button>
                    </form>
                </div>
            </Modal>
        );
    }
}

export default NewTask;