import React from "react";

const Player = (props) => {
  return (
    <div className="centerText profileComponent">
      <span>{props.profile.name || "Player Name"}</span>
      <br />
      <img
        src={props.profile.avatar}
        className="playerPicture"
        alt="Player avatar"
      />
    </div>
  );
};

export default Player;
