import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';
import Main from '../components/Main.page.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="main" />
        <Route path="main" component={Main} />
    </Route>
);
