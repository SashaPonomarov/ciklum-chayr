import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Account from '../components/Account.jsx';
import { openLogin } from '../actions/account.actions';


const mapStateToProps = (state) => {
    return {
        isAuth: state.account.isAuth,
        username: state.account.username,
        showLoginForm: state.account.showLoginForm,
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onLoginOpen: () => dispatch(openLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Account);