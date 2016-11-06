import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SeatDetails from '../components/SeatDetails.jsx';
import { closeSeatDetails, saveSeat, apiSeatDelete, freeSeat } from '../actions/seats.actions';
import { assignSeat } from '../actions/users.actions';


const mapStateToProps = (state) => {
    let seat = state.seats.currentSeat;
    let user = state.users.users.find((user) => seat.userId === user.userId);
    return {
        isAuth: state.account.isAuth,
        user, seat,
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    onClose: () => dispatch(closeSeatDetails()),
    saveSeat: (query) => dispatch(saveSeat(query)),
    apiSeatDelete: (query) => dispatch(apiSeatDelete(query)),
    assignSeat: (query) => dispatch(assignSeat(query)),
    freeSeat: (query) => dispatch(freeSeat(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeatDetails);