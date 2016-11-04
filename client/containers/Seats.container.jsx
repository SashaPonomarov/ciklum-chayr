import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Seats from '../components/Seats.jsx';
import { openSeatDetails, getSeats } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    return {
        seats: state.seats.seats || [],
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    getSeats: () => dispatch(getSeats()),
    onSeatClick: (seatId) => dispatch(openSeatDetails(seatId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Seats);