import React from "react";
import Player from "./Player";
import Level from "./Level";
import Budget from "./Budget";
import Stats from "./Stats";

const Profile = (props) => {
  return (
    <aside class="side left">
      <Player />
      <Level />
      <Budget />
      <Stats />
    </aside>
  );
};

export default Profile;
