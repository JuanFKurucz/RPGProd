import React from "react";
import PropTypes from 'prop-types';

const Player = ({profile}) => (
  <div className="centerText">
    <span>{profile.name || "Player Name"}</span>
    <br />
    <img
      src={
        profile.avatar ||
        "https://cdn1.iconfinder.com/data/icons/zeshio-s-fantasy-avatars/200/Fantasy_avatar_people-07-512.png"
      }
      className="playerPicture"
      alt="Player avatar"
    />
  </div>
);

Player.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired
}

export default Player;
