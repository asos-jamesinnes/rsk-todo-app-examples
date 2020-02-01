import {SET_USERNAME, SET_USERID} from '../Actions';

export const user = (state={'username': '', 'user_id': -1}, action) => {
  switch(action.type){
    case SET_USERNAME:
      return {...state, 'username': action.name};
    case SET_USERID:
      return {...state, 'user_id': action.id};  
    default:
      return state;  
  }
};

export default user;