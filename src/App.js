import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Profile from "./Profile";
import NavBar from "./NavBar";
import "./App.css";
import TweetsContextProvider from "./tweetsContext";

const App = () => {
  return (
    <TweetsContextProvider>
      <Router>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </Router>
    </TweetsContextProvider>
  );
};

export default App;
