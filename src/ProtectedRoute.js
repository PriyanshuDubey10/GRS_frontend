import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from './useContext/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user,admin } = useAuth()
  if (!user || admin) {
    toast.error('You need to log in to access this page', {
      icon: '🔒', 
    });
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;