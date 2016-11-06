import usersTypes from '../actions/types/users.types';

export default (state = {}, action) => {
  switch (action.type) {
    case usersTypes.RECEIVE_USERS:
      return Object.assign({}, state, {
        users: action.users,
        showUsersList: true
      })

    case usersTypes.UPDATE_USER:
      {let index = state.users.findIndex((user) => {
        return user.userId === action.user.userId;
      })
      return Object.assign({}, state, {
        users: [
          ...state.users.slice(0, index),
          action.user,
          ...state.users.slice(index + 1),
        ]
      })}

    case usersTypes.OPEN_USER_DETAILS:
      {
        let currentUser = state.users.find(user => user.userId === action.userId)
        return Object.assign({}, state, {
          currentUser,
          showUserDetails: true
        })
      }

    case usersTypes.CLOSE_USER_DETAILS:
      return Object.assign({}, state, {
        currentUser: '',
        showUserDetails: false
      })

    case usersTypes.SHOW_LIST:
      if (!state.users) {return state};
      return Object.assign({}, state, {
        showUsersList: true
      })

    case usersTypes.HIDE_LIST:
      return Object.assign({}, state, {
        showUsersList: false
      })

    default:
      return state;
  }
};
