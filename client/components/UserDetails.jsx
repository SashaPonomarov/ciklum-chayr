import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Person from 'material-ui/svg-icons/social/person';
import {blue500} from 'material-ui/styles/colors';


import UserDetailsForm from './UserDetailsForm.jsx';

const UserDetails = ({user, seat, isAuth, onClose}) => (
  <Paper className="user-details">
    <AppBar
      title="Person details"
      iconElementRight={<IconButton><NavigationClose /></IconButton>}
      showMenuIconButton={false}
      onRightIconButtonTouchTap={onClose}
    />
    <div className="user-details-content">
      <Person style={{width: 60, height: 60}} color={blue500} className="user-details-icon"/>
      <UserDetailsForm user={user} seat={seat} isAuth={isAuth} />
    </div>

  </Paper>
)

export default UserDetails;