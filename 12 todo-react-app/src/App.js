import React, { Component } from 'react';
import './App.css';
// import expect from 'expect';
// import deepFreeze from 'deep-freeze';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ToDoList from './containers/ToDoList/ToDoList.js'
import ToDoEditForm from './containers/ToDoEditForm/ToDoEditForm.js'

// const todo = (state, action) => {
//   switch(action.type) {
//     case 'ADD_TODO':
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false
//       }
//     case 'TOGGLE_TODO':
//         if(state.id !== action.id) {
//           return state;
//         }
//         return {
//           ...state,
//           completed: !state.completed
//         };
//     default: 
//       return  state;
//   }
// };
// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         todo(undefined, action)
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(t => todo(t, action));
//     default:
//       return state
//   }
// };
// const testTodo = () => {
//   const stateBefore = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     },
//     {
//       id: 1,
//       text: 'Go shopping',
//       completed: false
//     }
//   ];
//   const action = {
//     type: 'TOGGLE_TODO',
//     id: 1
//   };
//   const stateAfter = [
//     {
//       id: 0,
//       text: 'Learn Redux',
//       completed: false
//     },
//     {
//       id: 1,
//       text: 'Go shopping',
//       completed: true
//     }
//   ];

//   deepFreeze(stateBefore);
//   deepFreeze(stateAfter);

//   expect(
//     todos(stateBefore, action)
//   ).toEqual(stateAfter);
// };
// testTodo();
// console.log('All tests passed');

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
          <header className="App-header">
          <Switch>
            <Route exact path='/' component={ToDoList} />
            <Route exact path='/todo_items/:itemId' component={ToDoEditForm} />
          </Switch>
          </header>
        </div>
      </Router>
    );
  }
}
export default App;
