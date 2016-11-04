import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';

import SeatDetailsForm from './SeatDetailsForm.jsx';

const SeatDetails = ({seat, onClose, saveSeat}) => (
  <Paper className="seat-details">
    <AppBar
      title="Seat details"
      iconElementRight={<IconButton><NavigationClose /></IconButton>}
      showMenuIconButton={false}
      onRightIconButtonTouchTap={onClose}
    />
    <div className="seat-details-content">
      <PlayCircleOutline style={{width: 60, height: 60}}  className="seat-details-icon"/>
      <SeatDetailsForm seat={seat} saveSeat={saveSeat} />
    </div>

  </Paper>
)

export default SeatDetails;