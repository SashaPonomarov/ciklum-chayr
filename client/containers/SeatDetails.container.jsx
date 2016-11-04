import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SeatDetails from '../components/SeatDetails.jsx';
import { closeSeatDetails } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    return {
        seat: state.seats.currentSeat,
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onClose: () => dispatch(closeSeatDetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeatDetails);