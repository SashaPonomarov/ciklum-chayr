import React from 'react';
import FloorPlan from '../containers/FloorPlan.container.jsx';
import SeatDetails from '../containers/SeatDetails.container.jsx';
import UserDetails from '../containers/UserDetails.container.jsx';

const Main = ({showSeatDetails, showUserDetails}) => {
  return (<div>
    <FloorPlan />
    { showSeatDetails ? <SeatDetails /> : ''}
    { showUserDetails ? <UserDetails /> : ''}
  </div>)
};

export default Main;
