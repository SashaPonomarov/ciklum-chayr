import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import {blue500} from 'material-ui/styles/colors';


import SeatDetailsForm from './SeatDetailsForm.jsx';

const SeatDetails = ({seat, user, users, isAuth, onClose, saveSeat, apiSeatDelete, assignSeat}) => (
  <Paper className="seat-details">
    <AppBar
      title="Seat details"
      iconElementRight={<IconButton><NavigationClose /></IconButton>}
      showMenuIconButton={false}
      onRightIconButtonTouchTap={onClose}
    />
    <div className="seat-details-content">
      <PlayCircleOutline style={{width: 60, height: 60}} color={blue500} className="seat-details-icon"/>
      <SeatDetailsForm seat={seat} user={user} saveSeat={saveSeat} assignSeat={assignSeat} 
                       apiSeatDelete={apiSeatDelete} isAuth={isAuth} users={users} />
    </div>

  </Paper>
)

export default SeatDetails;