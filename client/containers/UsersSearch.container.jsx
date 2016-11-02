import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UsersSearch from '../components/UsersSearch.jsx';
import { searchUsers } from '../actions/users.actions';


const mapStateToProps = (state) => {
    return {
        users: state.users.users || []
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onSearch: (query) => dispatch(searchUsers(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersSearch);