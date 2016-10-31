import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import UsersList from '../containers/UsersList.container.jsx';

const style = {
        margin: 5,
    }

const Main = () => (
  <UsersList />
);

export default Main;
