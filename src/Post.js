import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublicIcon from "@material-ui/icons/Public";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              jjklasd{""}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @hjaskdhke
              </span>
            </h3>
          </div>
          <div className="post__headerDesc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              natus!
            </p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt="gif"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublicIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
