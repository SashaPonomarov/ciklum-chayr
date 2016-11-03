import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
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
    const {showLoginForm = false, isAuth, error, onLoginOpen, onLoginClose, submitAuth, onLogout} = this.props;
    const loginBtn = (<RaisedButton label="Log in" onClick={onLoginOpen} key="login" />);
    const logoutBtn = (<RaisedButton label="Log out" onClick={onLogout} key="logout" />);
    const newSeatBtn = (<RaisedButton secondary={true} label="New seat" key="newseat" />);
    const buttons = (
        <div className="account-buttons">
          {isAuth ? [newSeatBtn] : ''}
          {isAuth ? [logoutBtn] : loginBtn}
        </div>
      )

    return (
      <div className="account">
        {buttons}
        <Dialog
          className="log-in-form"
          title="Type your credentials"
          modal={false}
          open={showLoginForm}
          onRequestClose={onLoginClose}
          contentStyle={{width: 350}}
        >
          <LoginForm submitAuth={submitAuth} error={error} />
        </Dialog>
      </div>
    )
  }
}

export default Account;