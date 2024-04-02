import React from 'react';
import { auth, provider } from '../firebaseConfig';
import {signInWithPopup} from 'firebase/auth'
import './Login.css';

const Login = () => {
  // Sign in with google
  const signin = () => {
   
  }

  return (
    <div className="login-container">
      {/** TODO : User should be greeted - Welcome to Auth App */}
      
      {/** TODO : Signin button should be displayed */}
    </div>
  );
}

export default Login;