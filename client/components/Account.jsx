import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// import UsersList from './UsersList.jsx';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isAuth} = this.props;
    return (
      <div className="account">
        <RaisedButton label="Log in" />
      </div>
    )
  }
}

export default Account;