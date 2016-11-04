import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


class SeatDetails extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(seatId) {
    this.props.onSeatClick(seatId);
  }

  render() {
    const {seat} = this.props;

    return (
      <Paper className="seat-details">
        <div>
          Seat title
          {seat ? seat.seatTitle : ''}
        </div>
        <div>
          Occupant
          {seat ? seat.status : ''}
        </div>
      </Paper>
    )
  }
}

export default SeatDetails;