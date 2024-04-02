import React from 'react';
import { auth } from '../firebaseConfig';
import './Home.css';

const Home = () => {
  // Signout function
  const logout = () => {
    auth.signOut();
  }

  return (
    <div className="main-container">
      <h1>Welcome, {auth.currentUser.email}!</h1>
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;