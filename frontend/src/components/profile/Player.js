import React from "react";

const Player = (props) => {
  return (
    <div className="centerText profileComponent">
      <span>{props.playerName || "Player Name"}</span>
      <br />
      <img
        src="https://avatars0.githubusercontent.com/u/31422367?s=460&u=c74f34509e9ab6ecaab4b4253d612b36e8b188bb&v=4"
        className="playerPicture"
      />
    </div>
  );
};

export default Player;
