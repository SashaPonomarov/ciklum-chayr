import React from 'react';
import FloorPlan from '../containers/FloorPlan.container.jsx';
import SeatDetails from '../containers/SeatDetails.container.jsx';

const Main = ({showSeatDetails}) => {
  return (<div>
    <FloorPlan />
    { showSeatDetails ? <SeatDetails /> : ''}
  </div>)
};

export default Main;
