import React from 'react';
import { auth, provider } from '../firebaseConfig';
import {signInWithPopup} from 'firebase/auth'
import './Login.css';

const Login = () => {
  // Sign in with google
  const signin = () => {
    signInWithPopup(auth, provider)
      .catch(err => console.log(err));
  }

  return (
    <div className="login-container">
      <h1>Welcome to My App</h1>
      <button className="login-button" onClick={signin}>
        Sign In with Google
      </button>
    </div>
  );
}

export default Login;