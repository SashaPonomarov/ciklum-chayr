import usersTypes from '../actions/types/users.types';

export default (state = {}, action) => {
    switch (action.type) {
        case usersTypes.RECEIVE_USERS:
            return Object.assign({}, state, {
                users: action.users,
                showUsersList: true
            })

        case usersTypes.SELECT_USEER:
            return Object.assign({}, state, {
                
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
