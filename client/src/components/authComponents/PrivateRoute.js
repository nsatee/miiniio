import React from "react";
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    console.log('haha');
    return (
        <Route
            {...rest}
            render={props =>
                authed !== null ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
