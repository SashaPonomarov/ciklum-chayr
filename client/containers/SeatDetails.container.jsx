import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SeatDetails from '../components/SeatDetails.jsx';
import { closeSeatDetails, saveSeat, apiSeatDelete } from '../actions/seats.actions';


const mapStateToProps = (state) => {
    return {
        seat: state.seats.currentSeat,
        isAuth: state.account.isAuth
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onClose: () => dispatch(closeSeatDetails()),
    saveSeat: (query) => dispatch(saveSeat(query)),
    apiSeatDelete: (query) => dispatch(apiSeatDelete(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeatDetails);