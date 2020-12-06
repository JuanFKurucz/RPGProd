import React from "react";
import { Progress } from "reactstrap";

const Stats = (props) => {
  return (
    <div className="centerText profileComponent">
      Stats
      <div className="text-center">Stat name 1 50%</div>
      <Progress value={50} />
    </div>
  );
};

export default Stats;
