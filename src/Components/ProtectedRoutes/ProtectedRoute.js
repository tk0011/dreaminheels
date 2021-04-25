import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ render, ...args }) => (
  <Route
    component={withAuthenticationRequired(render, {
      onRedirecting: () => <div className="text-center d-flex justify-content-center align-items-center mt-5">
              <p className="py-5">Please login to continue...</p> 
         </div>,
    })}
    {...args}
  />
);

export default ProtectedRoute;