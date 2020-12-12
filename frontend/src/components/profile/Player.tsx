import React from 'react';

type PlayerProps = { profile: { name: string; avatar: string } };

const Player = ({ profile }: PlayerProps): React.ReactElement => (
  <div className="centerText">
    <span>{profile.name || 'Player Name'}</span>
    <br />
    <img
      src={
        profile.avatar ||
        'https://cdn1.iconfinder.com/data/icons/zeshio-s-fantasy-avatars/200/Fantasy_avatar_people-07-512.png'
      }
      className="playerPicture"
      alt="Player avatar"
    />
  </div>
);

export default Player;
