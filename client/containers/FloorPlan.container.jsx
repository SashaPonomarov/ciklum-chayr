import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FloorPlan from '../components/FloorPlan.jsx';
import { getSeats, openSeatDetails, closeSeatDetails, moveSeat } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    return {
        seats: state.seats.seats || [],
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    getSeats: () => dispatch(getSeats()),
    onSeatClick: (seatId) => dispatch(openSeatDetails(seatId)),
    closeSeatDetails: () => dispatch(closeSeatDetails()),
    moveSeat: (seat) => dispatch(moveSeat(seat))
})

export default connect(mapStateToProps, mapDispatchToProps)(FloorPlan);