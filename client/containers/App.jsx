import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../components/Header.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue50, blue400, blue600} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue400,
    primary2Color: blue600,
  }
});
const App = (props) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div id="app-view">
            <Header />
            {props.children}
        </div>
    </MuiThemeProvider>
);

App.propTypes = {
    children: PropTypes.element,
};

export default App;
