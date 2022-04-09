import React, { useContext } from "react";
import TweetForm from "./TweetFormFunc";
import TweetsList from "./TweetsList";
import Loader from "./loader";
import { tweetsContext } from "./tweetsContext";
import "./App.css";

const HomePage = () => {
  const { loading } = useContext(tweetsContext);
  if (!loading) return <Loader />;
  return (
    <div className="container">
      <TweetForm />
      <TweetsList />
    </div>
  );
};

export default HomePage;
