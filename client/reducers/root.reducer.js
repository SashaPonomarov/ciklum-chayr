import { combineReducers } from 'redux';

import users from './users.reducer';
import account from './account.reducer';
import seats from './seats.reducer';

const rootReducer = combineReducers({
    users, account, seats
});

export default rootReducer;
