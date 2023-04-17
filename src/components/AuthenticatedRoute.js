import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthenticatedRoute = (WrappedComponent, isLoggedIn) => {
  const WithAuthentication = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/signin');
      }
    }, [isLoggedIn, navigate]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default AuthenticatedRoute;