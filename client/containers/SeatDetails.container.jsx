import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SeatDetails from '../components/SeatDetails.jsx';
// import { openSeatDetails } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    return {
        seat: state.seats.currentSeat,
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    // onSeatClick: (seatId) => dispatch(openSeatDetails(seatId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeatDetails);