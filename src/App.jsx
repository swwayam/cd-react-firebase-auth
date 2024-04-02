import React from 'react';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
    <h1>Welcome to the Firebase Project</h1>
    // TODO : If user is logged in show home page, else show Login page.
  );
}

export default App;