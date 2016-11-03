import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import LoginForm from './LoginForm.jsx';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isAuth, showLoginForm, onLoginOpen} = this.props;
    let buttons, form;
    if (isAuth) {
      buttons = (<RaisedButton label="Log out" />)
    } else {
      buttons = (<RaisedButton label="Log in" onClick={onLoginOpen} />)
    }
    if (showLoginForm) {
      form = (<LoginForm />)
    }
    return (
      <div className="account">
        {buttons}
        {form}
      </div>
    )
  }
}

export default Account;