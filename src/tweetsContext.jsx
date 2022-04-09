import React, { useState, useEffect, createContext } from "react";

export const tweetsContext = createContext();

const TweetsContextProvider = (props) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoader] = useState(true);

  const handleAddTweet = (tweet) => {
    setTimeout(() => setLoader(false), 100);
    setTweets([...tweets], tweet);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
        );
        const data = await res.json();
        setTweets(data.tweets);
      } catch (error) {
        console.log(error);
      }
    };
    const refresh = setInterval(() => {
      fetchData();
    }, 1000);
    setLoader(true);
    return () => clearInterval(refresh);
  }, [tweets]);

  return (
    <tweetsContext.Provider value={{ handleAddTweet, tweets, loading }}>
      {props.children}
    </tweetsContext.Provider>
  );
};

export default TweetsContextProvider;
