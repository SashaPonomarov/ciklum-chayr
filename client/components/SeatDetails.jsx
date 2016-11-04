import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';


class SeatDetails extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
  }

  render() {
    const {seat, onClose} = this.props;
    const flatBtnStyle = {textTransform: "initial"};
    return (
      <Paper className="seat-details">
        <AppBar
          title="Seat details"
          iconElementRight={<IconButton><NavigationClose /></IconButton>}
          showMenuIconButton={false}
          onRightIconButtonTouchTap={onClose}
        />
        <div className="seat-details-content">
          <PlayCircleOutline style={{width: 60, height: 60}}  className="seat-details-icon"/>
          <form className="seat-details-form">
            <table>
              <tbody>
                <tr>
                  <td>Seat title:</td>
                  <td><FlatButton label={seat.seatTitle} labelStyle={flatBtnStyle} /></td>
                </tr>
                <tr>
                  <td>Occupant:</td>
                  <td><FlatButton label={seat.status} labelStyle={flatBtnStyle} /></td>
                </tr>
              </tbody>
            </table>        
          </form>
        </div>

      </Paper>
    )
  }
}

export default SeatDetails;