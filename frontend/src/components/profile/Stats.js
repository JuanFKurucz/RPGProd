import React from "react";
import { Progress } from "semantic-ui-react";

const Stats = (props) => {
  return (
    <div className="centerText profileComponent">
      Stats
      <div className="text-center">Stat name 1 50%</div>
      <Progress percent={50} progress color="brown" />
    </div>
  );
};

export default Stats;
