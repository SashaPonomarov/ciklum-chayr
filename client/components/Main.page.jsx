import React from 'react';
import Seats from '../containers/Seats.container.jsx';
import SeatDetails from '../containers/SeatDetails.container.jsx';

const Main = ({showSeatDetails}) => {
  return (<div>
    <Seats />
    { showSeatDetails ? <SeatDetails /> : ''}
  </div>)
};

export default Main;
