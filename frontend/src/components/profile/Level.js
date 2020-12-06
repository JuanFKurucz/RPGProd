import React from "react";
import { Progress } from "reactstrap";

const Level = (props) => {
  return (
    <div className="centerText profileComponent">
      <div className="text-center">Level 1</div>
      <Progress value={50} />
    </div>
  );
};

export default Level;
