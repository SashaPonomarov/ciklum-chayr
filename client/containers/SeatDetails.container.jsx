import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SeatDetails from '../components/SeatDetails.jsx';
import { closeSeatDetails, saveSeat } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    return {
        seat: state.seats.currentSeat,
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onClose: () => dispatch(closeSeatDetails()),
    saveSeat: (query) => dispatch(saveSeat(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeatDetails);