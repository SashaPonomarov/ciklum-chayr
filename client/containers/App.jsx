import React, { PropTypes } from 'react';
import Header from '../components/Header.jsx';
import Main from '../containers/Main.container.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue400, blue600, red500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue400,
    primary2Color: blue600,
    accent1Color: red500,
  }
});
const App = (props) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <Header />
            <Main />
        </div>
    </MuiThemeProvider>
);

export default App;
