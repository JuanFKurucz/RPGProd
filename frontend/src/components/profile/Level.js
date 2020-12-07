import React from "react";
import { Progress } from "reactstrap";

const Level = (props) => {
  return (
    <div className="centerText profileComponent">
      <div className="text-center">XP: {props.profile.xp}</div>
      <div className="text-center">Level: {props.profile.level}</div>
      <Progress value={(props.profile.levelPure % 1) * 100} />
    </div>
  );
};

export default Level;
