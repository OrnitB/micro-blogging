import "./App.css";
import React from "react";

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      userName: "",
      content: "",
    };
  }

  handlerOnSubmit(event) {
    event.preventDefault();
    const userNameInput = localStorage.getItem("userName");
    this.props.onAddTweet(this.state);
    console.log(this.state);
    console.log(userNameInput);
    this.setState({
      userName: userNameInput ? userNameInput : "",
      content: "",
      date: new Date(),
    });

    const data = this.state;
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
  }

  handlerOnChange(value) {
    this.setState({
      content: value,
      userName: localStorage.getItem("userName"),
    });
  }

  render() {
    return (
      <div className="mainForm">
        <form
          className="createTweet"
          onSubmit={(event) => this.handlerOnSubmit(event)}
        >
          <textarea
            placeholder="What do you have in mind?"
            value={this.state.content}
            onChange={(event) => this.handlerOnChange(event.target.value)}
          ></textarea>
          <br />
          <div id="buttonAndCharactersCount">
            <button
              type="submit"
              className="submitButton"
              disabled={this.state.content.length >= 141}
            >
              Tweet
            </button>
            <span className="charactersRemaining">
              Characters remaining: {140 - this.state.content.length}
            </span>
          </div>
        </form>
      </div>
    );
  }
}

// export default TweetForm;
