import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

import UsersSearchContainer from '../containers/UsersSearch.container.jsx';

const Header = () => (
    <AppBar 
        title="Chayr" 
        showMenuIconButton={false} 
        iconElementRight={
            <div>
              <UsersSearchContainer />
            </div>
            }
    />
);

export default Header;
