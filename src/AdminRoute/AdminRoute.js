import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, adminLoading } = useAuth();
  if (adminLoading) {
    return (
      <div className="flex justify-center">
      <div className="w-16 mt-12   h-16 border-blue-600 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
      </div>


    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
