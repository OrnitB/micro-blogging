import {
  getFirestore,
  collection,
  getDocs,
  getFirebaseData,
} from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { useResolvedPath } from "react-router";

export default function FirebaseFuncs() {
  const [user, setUsers] = useState([]);
  const [tweets, setTweets] = useState([]);
  const tweetsCollectionRef = collection(db, "tweets");

  useEffect(() => {
    const getTweets = async () => {
      const data = await getDocs(tweetsCollectionRef);
      console.log(data);
      setTweets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTweets();
  }, []);

  return (
    <div className="tweetsList">
      {tweets.map((tweet) => {
        return (
          <div>
            <h1>{tweet.date}</h1>
            <h1>{tweet.userName}</h1>
            <h1>{tweet.content}</h1>
          </div>
        );
      })}
    </div>
  );
}
