import React from 'react';
import { Navigate } from 'react-router-dom';

const Routes = ({ usuario, children }) => {
  if (!usuario) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Routes;
