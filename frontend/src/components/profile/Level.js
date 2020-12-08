import React from "react";
import { Progress } from "semantic-ui-react";

const Level = (props) => {
  return (
    <div className="centerText profileComponent">
      <div className="text-center">XP: {props.profile.xp}</div>
      <div className="text-center">Level: {props.profile.level}</div>
      <Progress
        percent={Math.round((props.profile.levelPure % 1) * 100)}
        progress
        color="brown"
      />
    </div>
  );
};

export default Level;
