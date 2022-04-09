import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div
      className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top"
      id="NavBar"
    >
      <ul id="navbarItems" className="navbar-nav me-auto mb-2 mb-lg-0">
        <ul>
          <li className="h2">Micro Blogging</li>
        </ul>
        <li id="navbarButton" className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li id="navbarButton" className="nav-item">
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
      <span className="welcomeUser">
        Hello,{" "}
        {localStorage.getItem("userName")
          ? localStorage.getItem("userName")
          : " please log in"}
        !
      </span>
    </div>
  );
};

export default NavBar;
