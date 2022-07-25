import { combineReducers } from 'redux';
import { 
   SET_FILTER,
   SET_MOVIES, 
   SET_USER, 
   SET_USER_DATA,
   SET_NEW_USERNAME,
   SET_NEW_PASSWORD,
   SET_NEW_EMAIL,
   SET_NEW_BIRTHDAY
   } from '../actions/actions';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}



function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function user(state=null, action){
  switch (action.type){
    case SET_USER:
      return action.value;
    default:
      return state;
  }
}

function userData(state={}, action){
  switch(action.type){
    case SET_USER_DATA:
      return action.value;
    case SET_NEW_USERNAME:
      return {
        ...state,
        Username:action.value
      }
    case SET_NEW_PASSWORD:
      return {
        ...state,
        Password:action.value
      }
    case SET_NEW_EMAIL:
      return {
        ...state,
        Email:action.value
      }
    case SET_NEW_BIRTHDAY:
      return {
        ...state,
        Birthday:action.value
      } 
    default:
      return state;
  }

}

const moviesApp = combineReducers({
    visibilityFilter,
    movies,
    user,
    userData

  });

  export default moviesApp