import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from '../components/Main.page.jsx';


const mapStateToProps = (state) => {
    return {
        showSeatDetails: state.seats.showSeatDetails || false,
        showUserDetails: state.users.showUserDetails || false,
    }
}

export default connect(mapStateToProps)(Main);