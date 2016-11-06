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
    const {showLoginForm, isAuth, error, onLoginOpen, onLoginClose, submitAuth, onLogout, onNewSeat} = this.props;
    const loginBtn = (<RaisedButton className="account-button" label="Log in" onClick={onLoginOpen} key="login" />);
    const logoutBtn = (<RaisedButton className="account-button" label="Log out" onClick={onLogout} key="logout" />);
    const newSeatBtn = (<RaisedButton className="account-button" 
                        secondary={true} label="New seat" onClick={onNewSeat} key="newseat" />);
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
          open={showLoginForm || false}
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