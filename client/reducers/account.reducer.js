import accountTypes from '../actions/types/account.types';

export default (state = {}, action) => {
  switch (action.type) {
    case accountTypes.OPEN_LOGIN:
      return Object.assign({}, state, {
        showLoginForm: true
      })
    default:
      return state;
  }
};
