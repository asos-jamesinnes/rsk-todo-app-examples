let nextTodoId = 0;
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_ALL_TODO = 'TOGGLE_ALL_TODO';
export const DELETE_COMPLETED_TODO = 'DELETE_COMPLETED_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_USERID = 'SET_USERID';
export const GET_TODO = 'GET_TODO';
export const RESET_TODOS = 'RESET_TODOS';

export const getTodo =  todo => ({
  type: GET_TODO,
  todo,
})

export const resetTodos = () => ({
  type: RESET_TODOS,
})

export const addTodo = ({username, id, text}) => ({
  type: ADD_TODO,
  id: username ? id : nextTodoId++,
  text,
});

export const toggleTodo = (completed, id) => ({
  type: TOGGLE_TODO,
  id,
  completed,
});

export const toggleAllTodo = completedAll => ({
  type: TOGGLE_ALL_TODO,
  completedAll,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});

export const deleteCompletedTodo = () => ({
  type: DELETE_COMPLETED_TODO,
});

export const editTodo = (text, id) => ({
  type: EDIT_TODO,
  text,
  id,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const setUserName = name => ({
  type: SET_USERNAME,
  name,
})

export const setUserId = id => ({
  type: SET_USERID,
  id,
})

export const requestAddTodo = (username, text) => {
  return function(dispatch){
    if(username){
      const token1 = localStorage.getItem('token1');
      return fetch('http://localhost:8000/missions/',{
        method: 'POST',
        body: JSON.stringify({title: text, completed : false}),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json; charset=UTF-8',
          'Authorization': 'Token ' + token1,
        },
        credentials: 'omit',
      }).then(function(response){
        return response.json().then(function(json){
          const id = json['id'];
          dispatch(addTodo({username, id, text}));
        });
      },function(error){
        alert(error.message);  
      });
    }else{
      dispatch(addTodo({username: '', id: 0, text}));
    }
  }
}

export const requestGetTodos = (username, id) => {
  return function(dispatch){
    if(username){
      const token1 = localStorage.getItem('token1');
      fetch('http://localhost:8000/users/' + id + '/', {
        method: 'GET',
        body: null,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json; charset=UTF-8',
          'Authorization': 'Token ' + token1,
        },
        credentials: 'omit',
      }).then(function(response){
        return response.json().then(function(json){
          const todos = json['missions'];
          if(todos){
            todos.forEach(todo_id => { 
              fetch('http://localhost:8000/missions/' + todo_id + '/', {
                method: 'GET',
                body: null,
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Accept': 'application/json; charset=UTF-8',
                  'Authorization': 'Token ' + token1,
                },
                credentials: 'omit',
              }).then(function(response){
                return response.json().then(function(json){
                  const todo = {id: json['id'], text: json['title'], completed: json['completed']};
                  dispatch(getTodo(todo));
                })
              });
            });
          }else{
            dispatch(getTodo([]));
          }
        })
      });
    }else{
      return Promise.resolve();
    }
  }
}

export const requestToggleTodo = (username, completed, id) => {
  return function(dispatch){
    if(username){
      const token1 = localStorage.getItem('token1');
      return fetch('http://localhost:8000/missions/' + id + '/', {
        method: 'PATCH',
        body: JSON.stringify({completed: completed}),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json; charset=UTF-8',
          'Authorization': 'Token ' + token1,
        },
        credentials: 'omit',
      }).then(function(response){
        dispatch(toggleTodo(completed, id));
      });
    }else{
      dispatch(toggleTodo(completed, id));
    }
  }
}

export const requestEditTodo = (username, text, id) => {
  return function(dispatch){
    if(username){
      const token1 = localStorage.getItem('token1');
      return fetch('http://localhost:8000/missions/' + id + '/', {
        method: 'PATCH',
        body: JSON.stringify({title: text}),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json; charset=UTF-8',
          'Authorization': 'Token ' + token1,
        },
        credentials: 'omit',
      }).then(function(response){
        dispatch(editTodo(text, id));
      })    
    }else{
      dispatch(editTodo(text, id));
    }
  }
}

export const requestDeleteTodo = (username, id) => {
  return function(dispatch){
    if(username){
      const token1 = localStorage.getItem('token1');
      return fetch('http://localhost:8000/missions/' + id + '/', {
        method: 'DELETE',
        body: null,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json; charset=UTF-8',
          'Authorization': 'Token ' + token1,
        },
        credentials: 'omit',
      }).then(function(response){
        dispatch(deleteTodo(id));
      })     
    }else{
      dispatch(deleteTodo(id));
    }
  }
}

export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
