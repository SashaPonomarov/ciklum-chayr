import usersTypes from './types/users.types';
import api from '../config/api';
const apiURL = api.base + 'users';

export const receiveUsers = (json) => ({
    type: usersTypes.RECEIVE_USERS,
    users: json.data.users
});

export const openUserDetails = (userId) => ({
    type: usersTypes.OPEN_USER_DETAILS,
    userId: userId
});

export const closeUserDetails = () => ({
    type: usersTypes.CLOSE_USER_DETAILS,
});

export const userSearchFocus = () => ({
    type: usersTypes.SHOW_LIST,
});

export const userSearchBlur = () => ({
    type: usersTypes.HIDE_LIST,
});

export const listUsers = () => {
  return dispatch => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveUsers(json))
        }
      ).catch(err => console.log(err))
  }
}

export const searchUsers = (query) => {
  return dispatch => {
    return fetch(`${apiURL}/search?s=${query.input}${query.filter ? '&noSeat=1' : ''}`)
      .then(response => response.json())
      .then(json => {
        console.log('success', json)
        return dispatch(receiveUsers(json))
        }
      ).catch(err => console.log(err))
  }
}