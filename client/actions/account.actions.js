import accountTypes from './types/account.types';
import api from '../config/api';
const apiURL = api.base + 'auth';

export const openLogin = () => ({
    type: accountTypes.OPEN_LOGIN,
});

export const closeLogin = () => ({
    type: accountTypes.CLOSE_LOGIN,
});

export const checkAuth = (json) => ({
    type: accountTypes.CHECK_AUTH,
    account: json.data
});

export const clearAuth = () => ({
    type: accountTypes.CLEAR_AUTH,
});

export const setAuth = (json) => ({
    type: accountTypes.SET_AUTH,
    account: json.data
});

export const authError = (json) => ({
    type: accountTypes.AUTH_ERROR,
    error: json.error
});

export const requestAuthStatus = () => {
  return dispatch => {
    return fetch(apiURL, {
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => {
        console.log('response ', json)
        return dispatch(checkAuth(json))
        }
      ).catch(err => console.log(err))
  }
}

export const logIn = (data) => {
  return dispatch => {
    return fetch(apiURL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
          if (json.status === 'success' && json.data && json.data.username) {
            dispatch(closeLogin());
            return dispatch(setAuth(json));
          }
          if (json.status === 'error' && json.error) {
            return dispatch(authError(json));
          }
        }
      ).catch(err => console.log(err))
  }
}

export const logOut = () => {
  return dispatch => {
    return fetch(`${apiURL}/logout`, {
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => {
          return dispatch(clearAuth())
        }
      ).catch(err => console.log(err))
  }
}