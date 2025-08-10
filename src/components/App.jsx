import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

var isLoggedIn = true; // Change this to true to simulate a logged-in user

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
