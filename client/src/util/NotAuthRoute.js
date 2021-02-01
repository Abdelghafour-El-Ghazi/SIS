import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth";

const NotAuthRoute = ({ component: Component, render, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Redirect to='/login' />
        ) : user.role === 3 ? (
          <Redirect to='/regions' />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default NotAuthRoute;
