import React, { useState } from "react";
import "./App.css";

const Profile = () => {
  const [userName, setUserName] = useState("");

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userName", userName);
    setUserName(userName);
  };

  const handlerOnChange = (value) => {
    setUserName(value);
    JSON.stringify(localStorage.getItem("userName"));
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="container" onSubmit={handlerOnSubmit}>
      <form id="usernameForm" onSubmit={handlerOnSubmit}>
        <label>Enter Your User Name: </label>
        <br />
        <input
          className="usernameInput"
          onChange={(event) => {
            handlerOnChange(event.target.value);
          }}
        ></input>
        <br />
        <button type="submit" className="usernameButton" onClick={refreshPage}>
          Set User Name
        </button>
      </form>
      <br />
      <span>
        <b>Logged in as: </b>
      </span>
      <span>{localStorage.getItem("userName")}</span>
    </div>
  );
};

export default Profile;
