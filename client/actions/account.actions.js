import accountTypes from './types/account.types';
import api from '../config/api';
const apiURL = api.base + 'users';

export const openLogin = () => ({
    type: accountTypes.OPEN_LOGIN,
});

