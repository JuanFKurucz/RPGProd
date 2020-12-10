import React from "react";
import { Progress, Image } from "semantic-ui-react";

const Stats = (props) => {
  return (
    <div className="centerText profileComponent">
      {props.name}
      {Object.keys(props.stats).map((stat) => (
        <>
          <div className="text-center categoryName">
            {props.images && (
              <Image
                key={stat}
                src={props.images[stat]}
                size="tiny"
                className="taskSkillImage"
              />
            )}
            {stat.replace(/_/gi, " ")} - Level:{" "}
            {Math.floor(props.stats[stat] / 5)}
          </div>
          <Progress
            percent={(props.stats[stat] % 5) * 20}
            progress
            color="brown"
          />
        </>
      ))}
    </div>
  );
};

export default Stats;
