import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from 'App/layout/App';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" render={props => <App {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
