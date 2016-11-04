import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Account from '../components/Account.jsx';
import { openLogin, closeLogin, requestAuthStatus, logIn, logOut } from '../actions/account.actions';
import { newSeat } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    return {
        isAuth: state.account.isAuth,
        username: state.account.username,
        showLoginForm: state.account.showLoginForm,
        error: state.account.error
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onLoginOpen: () => dispatch(openLogin()),
    onLoginClose: () => dispatch(closeLogin()),
    checkAuth: () => dispatch(requestAuthStatus()),
    submitAuth: (data) => dispatch(logIn(data)),
    onLogout: (data) => dispatch(logOut(data)),
    onNewSeat: () => dispatch(newSeat()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Account);