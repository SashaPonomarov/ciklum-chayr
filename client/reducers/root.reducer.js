import { combineReducers } from 'redux';

import users from './users.reducer';
import account from './account.reducer';

const rootReducer = combineReducers({
    users, account
});

export default rootReducer;
