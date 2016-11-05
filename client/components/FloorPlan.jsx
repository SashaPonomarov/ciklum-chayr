import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import 'fabric';
import { newFabricCanvas, updateFabricSeats } from '../assets/scripts/fabricSeats.js';


class FloorPlan extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const {getSeats, onSeatClick, closeSeatDetails, moveSeat} = this.props;
    getSeats();
    const canvas = newFabricCanvas(onSeatClick, closeSeatDetails, moveSeat);
    this.setState({canvas});
  }
  componentWillReceiveProps(next) {
    console.log('will receive', next.seats)
    if (this.props.seats !== next.seats) {
      updateFabricSeats(next.seats, this.state.canvas)
    }
  }
  handleClick(seatId) {
    this.props.onSeatClick(seatId);
  }

  render() {
    return (
      <div className="floor-plan">
        <canvas id="floorPlan" width="1267" height="684"></canvas>
      </div>
    )
  }
}

export default FloorPlan;