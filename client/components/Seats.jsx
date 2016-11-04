import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';


class Seats extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getSeats();
  }

  handleClick(seatId) {
    this.props.onSeatClick(seatId);
  }

  render() {
    const {seats} = this.props;
    const seatsList = seats.map(seat => {
      return (
        <ListItem 
          key={seat.seatId} 
          primaryText={seat.seatTitle} 
          onClick={this.handleClick.bind(this, seat.seatId)} 
        />
        )
    })
    return (
      <List style={{width: 300}}>
        {seatsList}
      </List>
    )
  }
}

export default Seats;