import accountTypes from '../actions/types/account.types';

export default (state = {}, action) => {
  switch (action.type) {
    case accountTypes.OPEN_LOGIN:
      return Object.assign({}, state, {
        showLoginForm: true
      })
    case accountTypes.CLOSE_LOGIN:
      return Object.assign({}, state, {
        showLoginForm: false
      })
    case accountTypes.CHECK_AUTH:
      return Object.assign({}, state, {
        isAuth: (action.account.username ? true : false)
      })
    case accountTypes.CLEAR_AUTH:
      return Object.assign({}, state, {
        isAuth: false,
        username: ''
      })
    case accountTypes.SET_AUTH:
      return Object.assign({}, state, {
        isAuth: true,
        username: action.account.username,
        error: null
      })
    case accountTypes.AUTH_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })

    default:
      return state;
  }
};
