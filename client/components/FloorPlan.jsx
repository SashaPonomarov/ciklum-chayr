import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import 'fabric';
import { newFabricCanvas, updateFabricSeats, highlightFabricSeat } from '../assets/scripts/fabricSeats.js';


class FloorPlan extends Component {
  constructor(props) {
    super(props);
    this.onSeatSelect = this.onSeatSelect.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }
  componentDidMount() {
    const {getSeats, moveSeat} = this.props;
    getSeats();
    const canvas = newFabricCanvas(this.onSeatSelect, this.closeDetails, moveSeat);
    this.setState({canvas});
  }
  componentWillReceiveProps(next) {
    console.log('will receive', next)
    const {seats, isAuth} = this.props;
    if (seats !== next.seats || isAuth !== next.isAuth) {
      updateFabricSeats(this.state.canvas, next.seats, !next.isAuth);
    }
  }
  componentDidUpdate(prev) {
    const {highlightSeat} = this.props;
    if (highlightSeat && (highlightSeat !== prev.highlightSeat)) {
      highlightFabricSeat(this.state.canvas, highlightSeat);
    }
  }
  onSeatSelect(seatId) {
    const {onSeatClick, highlightSeat, showUserDetails, currentUser, closeUserDetails} = this.props;
    let seatOpen = !highlightSeat;
    if (showUserDetails && (currentUser.seatId !== seatId)) {
      closeUserDetails();
      seatOpen = true;
    }
    if (seatOpen) {
      onSeatClick(seatId);
    }
  }
  closeDetails() {
    const {showUserDetails, showSeatDetails, closeUserDetails, closeSeatDetails} = this.props;
    console.log('closing, showSeatDetails', showSeatDetails, 'showUserDetails', showUserDetails)
    if (showUserDetails) {
      closeUserDetails();
    }
    if (showSeatDetails) {
      closeSeatDetails();
    }
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