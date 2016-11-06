import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import UserDetails from '../components/UserDetails.jsx';
import { closeUserDetails } from '../actions/users.actions';
import { selectionModeOn } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    let user = state.users.currentUser;
    let seat = state.seats.seats.find((seat) => seat.seatId === user.seatId)
    return {
        user, 
        seat,
        isAuth: state.account.isAuth
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onClose: () => dispatch(closeUserDetails()),
    selectionModeOn: () => dispatch(selectionModeOn()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);