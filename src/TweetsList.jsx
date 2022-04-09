import { v4 as uuidv4 } from "uuid";
import Tweet from "./Tweet";
import "./App.css";
import { tweetsContext } from "./tweetsContext";
import React, { useContext } from "react";

const TweetsList = () => {
  const { tweets } = useContext(tweetsContext);
  tweets.map((tweet) => {
    return tweet;
  });
  return (
    <div className="allTweets">
      {tweets.map((tweet) => {
        return <Tweet key={uuidv4()} tweet={tweet} />;
      })}
    </div>
  );
};

export default TweetsList;
