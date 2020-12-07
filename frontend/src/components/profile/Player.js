import React from "react";

const Player = (props) => {
  return (
    <div className="centerText">
      <span>{props.profile.name || "Player Name"}</span>
      <br />
      <img
        src={
          props.profile.avatar ||
          "https://cdn1.iconfinder.com/data/icons/zeshio-s-fantasy-avatars/200/Fantasy_avatar_people-07-512.png"
        }
        className="playerPicture"
        alt="Player avatar"
      />
    </div>
  );
};

export default Player;
