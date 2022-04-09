import "./App.css";
import React, { useState, useContext } from "react";
import { tweetsContext } from "./tweetsContext";

const TweetForm = () => {
  const { handleAddTweet } = useContext(tweetsContext);
  const [date, setDate] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const userNameInput = localStorage.getItem("userName");
    handleAddTweet({ date, userName, content });
    console.log(date, userName, content);
    console.log(userNameInput);
    setUserName(userNameInput ? userNameInput : "");
    setContent("");
    setDate(new Date());

    const data = { date, userName, content };

    fetch(
      "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (value) => {
    setContent(value);
    setUserName(localStorage.getItem("userName"));
  };

  return (
    <div className="mainForm">
      <form className="createTweet" onSubmit={(event) => handleSubmit(event)}>
        <textarea
          placeholder="What do you have in mind?"
          value={content}
          onChange={(event) => handleChange(event.target.value)}
        ></textarea>
        <br />
        <div id="buttonAndCharactersCount">
          <button
            type="submit"
            className="submitButton"
            disabled={content.length >= 141}
          >
            Tweet
          </button>
          <span className="charactersRemaining">
            Characters remaining: {140 - content.length}
          </span>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
