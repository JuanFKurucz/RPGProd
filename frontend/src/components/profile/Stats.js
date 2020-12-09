import React from "react";
import { Progress } from "semantic-ui-react";

const Stats = (props) => {
  return (
    <div className="centerText profileComponent">
      Stats
      {Object.keys(props.profile.stats).map((stat) => (
        <>
          <div className="text-center categoryName">
            {stat} Level: {Math.floor(props.profile.stats[stat] / 5)}
          </div>
          <Progress
            percent={(props.profile.stats[stat] % 5) * 20}
            progress
            color="brown"
          />
        </>
      ))}
    </div>
  );
};

export default Stats;
