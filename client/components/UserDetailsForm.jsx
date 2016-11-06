import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class UserDetailsForm extends Component {
  render() {
    const {user, seat, isAuth} = this.props;
    return (
      <div className="user-details-form">
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td className="user-details-value">
                {`${user.name} ${user.lastName}`}
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td className="user-details-value">
                {user.email}
              </td>
            </tr>
            <tr>
              <td>Seat:</td>
              <td className="user-details-value">
                { seat ? seat.seatTitle : 'No seat'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserDetailsForm;