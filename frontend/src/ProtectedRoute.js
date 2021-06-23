import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  console.log(authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} {...authenticated} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
