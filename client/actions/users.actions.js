import usersTypes from './types/users.types';

export const receiveUsers = (json) => ({
    type: usersTypes.RECEIVE_USERS,
    data: json.data
});

export const listUsers = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/users/`)
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveUsers(json))
        }
      ).catch(err => console.log(err))
  }
}