import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import 'fabric';
import { newFabricCanvas, updateFabricSeats } from '../assets/scripts/fabricSeats.js';


class Seats extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getSeats();
    // require('../assets/scripts/fabricSeats.js');
    const canvas = newFabricCanvas(this.props.onSeatClick, this.props.closeSeatDetails);
    this.setState({canvas});
  }
  componentWillReceiveProps(next) {
    if (this.props.seats !== next.seats) {
      updateFabricSeats(next.seats, this.state.canvas)
    }
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
      <div>
      <List style={{width: 300}}>
        {seatsList}
      </List>
      <canvas id="floorPlan" width="1267" height="684"></canvas>
      </div>
    )
  }
}

export default Seats;