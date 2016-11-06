import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FloorPlan from '../components/FloorPlan.jsx';
import { getSeats, openSeatDetails, closeSeatDetails, moveSeat } from '../actions/seats.actions';
import { closeUserDetails } from '../actions/users.actions';


const mapStateToProps = (state) => {
  let highlightSeat;
  if (state.users.currentUser && state.users.currentUser.seatId) {
    highlightSeat = state.users.currentUser.seatId;
  }
    return {
        seats: state.seats.seats || [],
        highlightSeat,
        currentUser: state.users.currentUser,
        showUserDetails: state.users.showUserDetails,
        showSeatDetails: state.seats.showSeatDetails,
        isAuth: state.account.isAuth
    }
}

const mapDispatchToProps = (dispatch) => ({
    getSeats: () => dispatch(getSeats()),
    onSeatClick: (seatId) => dispatch(openSeatDetails(seatId)),
    closeSeatDetails: () => dispatch(closeSeatDetails()),
    closeUserDetails: () => dispatch(closeUserDetails()),
    moveSeat: (seat) => dispatch(moveSeat(seat))
})

export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);