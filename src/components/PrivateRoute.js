import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  let isAuthenticated;

  try {
    isAuthenticated = localStorage.getItem('token');
    console.log("Token found:", isAuthenticated); // Check what is found in storage
  } catch (error) {
    console.error("Error accessing localStorage", error);
    isAuthenticated = null; // Assume not authenticated if error occurs
  }

  if (!isAuthenticated) {
    console.log("No token found, redirecting to login...");
    return <Navigate to="/LoginPage" state={{ from: location }} replace />;
  }

  console.log("Token valid, rendering child component...");
  return children;
};

export default PrivateRoute;
