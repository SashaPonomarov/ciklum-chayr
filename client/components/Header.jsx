import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
        margin: 5,
    }

const Header = () => (
    <AppBar 
        title="Chayr" 
        showMenuIconButton={false} 
    />
);

export default Header;
