import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    if (event) {event.preventDefault();}
    let query = {
    }
  }
  render() {
    return (
      <Paper className="log-in-form">
        <form onSubmit={this.handleSubmit}>
          <TextField 
            name="username"
            floatingLabelText="Username" 
          />
          <TextField 
            name="password"
            floatingLabelText="Password" 
          />
          <RaisedButton type="submit" label="Submit" primary={true} />
        </form>
      </Paper>
    )
  }
}

export default LoginForm;