import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class List extends Component {
  state = {
    showForm: false,
    formValue: ""
  };

//Updates formvalue when inputs change - submission
//calls the formSubmit handler.
inputChange = e => {
  this.setState({formValue: e.target.value});
};

//Event handler for form submission.
formSubmit = e => {
  const {formValue} = this.state;
  const {addTodo} = this.props;
  e.preventDefault();
  addTodo({title: formValue});
  this.setState({formValue: ""});
};

//Renders our input forms.
renderForm = () => {
  const {showForm, formValue} = this.state;
  if (showForm) {
    return (
      <div className = "List">
        <form onSubmit={this.formSubmit}>
          <div>
            <div>
              <i>Add</i>'
            </div>
              <input
              value={formValue}
              onChange={this.inputChange}
              id="toDoNext"
              type="text"
              />
            <div>
              <label htmlFor="toDoNext">What Next?</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

//Function maps over props (which are todos loaded in from State
//Then outputs a ListItem component passing in those values as props.
renderToDo() {
  const {data} = this.props;
  const toDos = _.map(data, (value, key) => {
    console.log(value, key);
    return <ListItem key={key} todoId={key} todo = {value} />;
  });
  if(!_.isEmpty(toDos)) {
    return toDos;
  }
  else return (
    <div>
      <h4>You have no more things ToDo!</h4>
    </div>
  );
}

//Runs our fetch method that calls the todos down from the
//db instance and loads them into state.
componentDidMount() {
  this.props.fetchToDos();
}

render() {
  const {showForm} = this.state;
  return (
    <div className = "List">
      <div>
      {this.renderForm()}
      {this.renderToDo()}
      </div>
      <div>
      <button onClick = {()=>this.setState({showForm: !showForm})}>
      {showForm ? (
        <i>Close</i>
      ) : (
        <i>Add</i>
      )}
      </button>
      </div>
    </div>
  );
}
}

//Maps over every element in state.data and loads it into
//this.props.data.
const mapStateToProps = ({data}) => {
  return (
    {data}
  )
}
//Connects our mapstatetoprops and actions to the List component.
export default connect(mapStateToProps, actions)(List);
