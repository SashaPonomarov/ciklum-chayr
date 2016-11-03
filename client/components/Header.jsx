import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import UsersSearchContainer from '../containers/UsersSearch.container.jsx';
import AccountContainer from '../containers/Account.container.jsx';
import {ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

const Header = () => (
  <AppBar showMenuIconButton={false} title="Chayr" style={{alignItems: 'center'}}>
    <ToolbarGroup>
      <UsersSearchContainer />
    </ToolbarGroup>
    <ToolbarGroup>
      <AccountContainer />
    </ToolbarGroup>
  </AppBar>
)


export default Header;
