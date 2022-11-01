export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER='SET_USER';
export const SET_USER_DATA= 'SET_USER_DATA';
export const SET_NEW_USERNAME= 'SET_NEW_USERNAME';
export const SET_NEW_PASSWORD= 'SET_NEW_PASSWORD';
export const SET_NEW_EMAIL= 'SET_NEW_EMAIL';
export const SET_NEW_BIRTHDAY= 'SET_NEW_BIRTHDAY';

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function setUser(value){
  return{type: SET_USER, value};
}

export function setUserData(value){
  return {type: SET_USER_DATA,value}
}

export function setUsername(value){
  return {type: SET_NEW_USERNAME,value}
}

export function setPassword(value){
  return {type: SET_NEW_PASSWORD,value}
}

export function setEmail(value){
  return {type: SET_NEW_EMAIL,value}
}

export function setBirthday(value){
  return {type: SET_NEW_BIRTHDAY,value}
}
