import React from "react";
import Player from "./Player";
import Level from "./Level";
import Budget from "./Budget";
import Stats from "./Stats";

const Profile = (props) => {
  return (
    <aside className="side left">
      <Player profile={props.profile} />
      <Level profile={props.profile} />
      <Budget profile={props.profile} />
      <Stats profile={props.profile} />
    </aside>
  );
};

export default Profile;
