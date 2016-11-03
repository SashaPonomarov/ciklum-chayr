import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Account from '../components/Account.jsx';
// import { searchUsers, selectUser, userSearchFocus, userSearchBlur } from '../actions/account.actions';


const mapStateToProps = (state) => {
    return {
        isAuth: state.account.isAuth,
        username: state.account.username
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,

})

export default connect(mapStateToProps, mapDispatchToProps)(Account);