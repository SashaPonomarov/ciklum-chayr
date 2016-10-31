import usersTypes from '../actions/types/users.types';

export default (state = {}, action) => {
    switch (action.type) {
        case usersTypes.RECEIVE_USERS:
            return Object.assign({}, state, {
                users: action.data.users
            })

        default:
            return state;
    }
};
