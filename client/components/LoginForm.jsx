import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }
  handleChange(event) {
    let name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    let query = {
      username: this.state.username,
      password: this.state.password
    };
    if (query.username && query.password) {
      this.props.submitAuth(query);
    }
  }
  render() {
    let { error } = this.props;
    let errorMsg = error ? <p>{error}</p> : '';
    return (
        <form onSubmit={this.handleSubmit}>
          <TextField 
            name="username"
            floatingLabelText="Username" 
            onChange={this.handleChange} 
          />
          <TextField 
            name="password"
            floatingLabelText="Password" 
            onChange={this.handleChange} 
          />
          <RaisedButton type="submit" label="Submit" primary={true} />
          {errorMsg}
        </form>
    )
  }
}

export default LoginForm;