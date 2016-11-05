import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class SeatDeleteDialog extends Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      open: false
    }
  }

  componentWillReceiveProps(props) {
    if (props.open !== this.state.open) {
      this.setState({
        open: props.open
      })
    }
  }
  
  handleClose() {
    this.setState({open: false});
  };

  handleDelete() {
    this.props.apiSeatDelete({seatId: this.props.seatId});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDelete}
      />,
    ];

    return (
      <Dialog
        title="Confirm delete"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      >
        Are you sure you want to delete the seat?
      </Dialog>
    );
  }
}
