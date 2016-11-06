import { updateSeat, selectionModeOff } from './seats.actions';
import usersTypes from './types/users.types';
import api from '../config/api';
const apiURL = api.base + 'users';

export const receiveUsers = (json) => ({
    type: usersTypes.RECEIVE_USERS,
    users: json.data.users
});

export const updateUser = (user) => ({
    type: usersTypes.UPDATE_USER,
    user: user
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

export const assignSeat = (data) => {
  if (!data.user) {return;}
  let body;
  if (data.seatId) {
    body = {user: {seatId: data.seatId}};
  } 
  else {
    if (!data.user.seatId) {return;}
    body = {
      user: {seatId: ''},
      freeSeat: data.user.seatId
    }
  }
  console.log('body', body)
  return dispatch => {
    return fetch(`${apiURL}/${data.user.userId}`, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(json => {
          dispatch(selectionModeOff());
          if (json.status === 'success' && json.data) {
            if (json.data.user) {
              dispatch(updateUser(json.data.user));
            }
            if (json.data.seat) {
              dispatch(updateSeat(json.data.seat));
            }
            if (json.data.prevSeat) {
              dispatch(updateSeat(json.data.prevSeat));
            }
            return;
          }
          if (json.status === 'error' && json.error) {
            console.log(json.error);
          }
        }
      ).catch(err => console.log(err))
  }
}