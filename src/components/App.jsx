import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Main from './Main';

var isLoggedIn = false; // Change this to true to simulate a logged-in user

function App() {
  return (
    <div className="app">
      <Header />
      {isLoggedIn ? <Main /> : <Login />}
      <Footer />
    </div>
  );
}

export default App;
