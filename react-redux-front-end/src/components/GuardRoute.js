import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default GuardRoute;