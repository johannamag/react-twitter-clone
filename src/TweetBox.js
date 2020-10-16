import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar />
          <input placeholder="What is up?" type="text" />
        </div>
        <input
          className="tweetbox__inputimg"
          placeholder="Optional: Image URL"
          type="text"
        />
        <Button className="tweetbox__btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
