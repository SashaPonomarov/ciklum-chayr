import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';

import SeatDeleteDialog from './SeatDeleteDialog.jsx';

class SeatDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOccupant = this.handleOccupant.bind(this);
    let {seat, user} = this.props;
    if (user) {
      user.fullname = `${user.name} ${user.lastName}`;
    }
    this.state = {
      seatTitleEdit: false,
      seatTitle: seat.seatTitle,
      seatOccupant: user,
    }
  }
  componentWillReceiveProps(props) {
    const {seat, user} = props;
    if (user) {
      user.fullname = `${user.name} ${user.lastName}`;
    }
    this.setState({
      seatTitle: seat.seatTitle, 
      seatOccupant: user
    })
  }
  handleClick(target, content) {
    if (this.props.isAuth) {
      this.setState({
        [target + 'Edit']: true,
        [target]: content
      })
    }
  }
  handleBlur(event) {
    this.setState({[event.target.name + 'Edit']: false})
  }
  handleChange(event) {
    let name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  handleOccupant(input, index) {
    if (index !== -1) {
      this.setState({
        seatOccupant: input.user
      });
      console.log(this.state)
    }
  }
  handleSave() {
    const {seat} = this.props;
    if (this.state.seatOccupant && (seat.userId !== this.state.seatOccupant.userId)) {
      let query = {
        seatId: seat.seatId,
        user: this.state.seatOccupant
      }
      this.props.assignSeat(query);
    }
    let query = {
      body: {
        seat: {
          seatTitle: this.state.seatTitle,
          coordinates: this.props.seat.coordinates
        }
      },
      seatId: this.props.seat.seatId
    }
    this.props.saveSeat(query);
  }

  render() {
    const {seat, user, users = [], isAuth, apiSeatDelete, freeSeat} = this.props;
    const flatBtnStyle = {textTransform: "initial"};

    const dataSource = users.map((user) => {
      user.fullname = `${user.name} ${user.lastName}`
      return {
        text: user.fullname,
        value: (<MenuItem primaryText={user.fullname} />),
        user
      }
    });
    const style = {
      fields: {
        width: 160
      }
    }

    const title = ( this.state.seatTitleEdit ? 
          (<TextField
            name="seatTitle" 
            autoFocus={true} 
            autoComplete="off" 
            hintText={this.state.seatTitle}
            value={this.state.seatTitle || ''} 
            onChange={this.handleChange} 
            onBlur={this.handleBlur}
            style={style.fields}
          />) :
          (<FlatButton 
            label={this.state.seatTitle || "No title"} 
            labelStyle={flatBtnStyle} 
            onClick={this.handleClick.bind(this, "seatTitle", this.state.seatTitle)}
          />))

    const actions = (isAuth ? (
        <div>
          <SeatDeleteDialog apiSeatDelete={apiSeatDelete} seatId={seat.seatId} />
          <RaisedButton className="seat-details-save" label="Save" onClick={this.handleSave} />
        </div>) : '');

    let occupantBtnText = this.state.seatOccupant ? this.state.seatOccupant.fullname : "Free";
    const occupant = ( this.state.seatOccupantEdit ? 
          (<AutoComplete
            floatingLabelText="Search users"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={dataSource} 
            listStyle={style.fields}
            menuStyle={style.fields}
            textFieldStyle={style.fields}
            onNewRequest={this.handleOccupant}
          />) :
          (<div>
              <FlatButton 
                label={occupantBtnText} 
                labelStyle={flatBtnStyle} 
                onClick={this.handleClick.bind(this, "seatOccupant", this.state.seatOccupant)}
              />
              <IconButton tooltip="Leave selection mode" onClick={freeSeat.bind(this, {seatId: seat.seatId})}>
                <Close />
              </IconButton>
            </div>
          ))

    return (
          <form className="seat-details-form">
            <table>
              <tbody>
                <tr>
                  <td>Seat title:</td>
                  <td>{title}</td>
                </tr>
                <tr>
                  <td>Occupant:</td>
                  <td>{occupant}</td>
                </tr>
              </tbody>
            </table>
            {actions}
          </form>
    )
  }
}

export default SeatDetailsForm;