import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class UserDetailsForm extends Component {
  render() {
    const {user, seat, isAuth, selectionModeOn} = this.props;
    const assignBtn = isAuth ? (
      <RaisedButton 
        className="user-details-assign" 
        label="Assign" 
        onClick={selectionModeOn} 
      />) : '';
    const seatTitle = <span>{seat ? seat.seatTitle : 'No seat assigned'}</span>;
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
                {seatTitle}
                {assignBtn}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserDetailsForm;