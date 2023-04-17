import React from 'react';
import { useNavigate } from 'react-router-dom';

function AuthButtons() {
  const navigate = useNavigate();

  const toggleSignUp = () => {
    navigate('/signup');
  };

  const toggleSignIn = () => {
    navigate('/signin');
  };


  return (
    <>
      <button onClick={toggleSignUp}>Don't have an account? Sign Up</button>
      <button onClick={toggleSignIn}>Already have an account? Log In</button>
    </>
  );
}

export default AuthButtons;
