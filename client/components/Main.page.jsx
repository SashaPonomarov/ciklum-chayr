import React from 'react';
import SeatsContainer from '../containers/Seats.container.jsx';
import SeatDetails from '../containers/SeatDetails.container.jsx';

const Main = (showSeatDetails) => (
  <div>
    <SeatsContainer />
    { showSeatDetails ? <SeatDetails /> : ''}
  </div>
);

export default Main;
