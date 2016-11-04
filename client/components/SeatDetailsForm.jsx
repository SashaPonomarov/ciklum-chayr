import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SeatDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      seatTitleEdit: false,
      seatTitle: this.props.seat.seatTitle,
      status: this.props.seat.status
    }
  }
  componentWillReceiveProps(props) {
    const {seat} = props;
    const {seatTitle, status} = seat;
    this.setState({
      seatTitle, status
    })
  }
  handleClick(target, content) {
    this.setState({
      [target + 'Edit']: true,
      [target]: content
    })
  }
  handleBlur(event) {
    this.setState({[event.target.name + 'Edit']: false})
  }
  handleChange(event) {
    let name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  handleSave() {
    let query = {
      body: {
        seat: {seatTitle: this.state.seatTitle}
      },
      seatId: this.props.seat.seatId
    }
    this.props.saveSeat(query);
  }

  render() {
    console.log('state', this.state)
    const {seat} = this.props;
    const flatBtnStyle = {textTransform: "initial"};
    const title = ( this.state.seatTitleEdit ? 
          (<TextField
            name="seatTitle" 
            autoFocus={true} 
            autoComplete="off" 
            hintText={this.state.seatTitle}
            value={this.state.seatTitle || ''} 
            onChange={this.handleChange} 
            onBlur={this.handleBlur}
            style={{width: 150}}
          />) :
          (<FlatButton 
            label={this.state.seatTitle || "No title"} 
            labelStyle={flatBtnStyle} 
            onClick={this.handleClick.bind(this, "seatTitle", this.state.seatTitle)}
          />))
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
                  <td><FlatButton label={seat.status || "Free"} labelStyle={flatBtnStyle} /></td>
                </tr>
              </tbody>
            </table>
            <RaisedButton label="Save" onClick={this.handleSave} />
          </form>
    )
  }
}

export default SeatDetailsForm;