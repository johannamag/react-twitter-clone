import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Jesssia",
      userName: "jesssia",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2020/03/14/amanda-smith-march-14-2020-1024x683.jpeg",
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is up?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetbox__inputimg"
          placeholder="Optional: Image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetbox__btn">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
