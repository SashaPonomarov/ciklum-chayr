import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UsersSearch from '../components/UsersSearch.jsx';
import { listUsers, searchUsers, openUserDetails, userSearchFocus, userSearchBlur } from '../actions/users.actions';


const mapStateToProps = (state) => {
    return {
        users: state.users.foundUsers || [],
        showUsersList: state.users.showUsersList
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onSearch: (query) => dispatch(searchUsers(query)),
    onUserSelect: (userId) => dispatch(openUserDetails(userId)),
    onSearchFocus: () => dispatch(userSearchFocus()),
    onSearchBlur: () => dispatch(userSearchBlur()),
    listUsers: () => dispatch(listUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersSearch);