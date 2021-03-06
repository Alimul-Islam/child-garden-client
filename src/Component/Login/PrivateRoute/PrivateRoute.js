
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';



const PrivateRoute = ({ children, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user')) || {};

    return (

        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );

};

export default PrivateRoute;