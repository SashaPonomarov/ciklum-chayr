import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import LoginForm from './LoginForm.jsx';

class Account extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    let {showLoginForm = false, isAuth, error, onLoginOpen, onLoginClose, submitAuth, onLogout} = this.props;
    let buttons, form;
    if (isAuth) {
      buttons = (<RaisedButton label="Log out" onClick={onLogout} />)
    } else {
      buttons = (<RaisedButton label="Log in" onClick={onLoginOpen} />)
    }
    return (
      <div className="account">
        {buttons}
        <Dialog
          className="log-in-form"
          title="Type your credentials"
          modal={false}
          open={showLoginForm}
          onRequestClose={onLoginClose}
          contentStyle={{width: 350, textAlign: 'center'}}
        >
          <LoginForm submitAuth={submitAuth} error={error} />
        </Dialog>
      </div>
    )
  }
}

export default Account;