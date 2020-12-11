import React from "react";
import PropTypes from 'prop-types';

import { Progress, Image } from "semantic-ui-react";

const Stats = ({name,stats,images}) => (
  <div className="centerText profileComponent">
    {name}
    {Object.keys(stats).map((stat) => (
      <>
        <div className="text-center categoryName">
          {images && (
            <Image
              key={stat}
              src={images[stat]}
              size="tiny"
              className="taskSkillImage"
            />
          )}
          {stat.replace(/_/gi, " ")}
          {" "}
          - Level:
          {" "}
          {Math.floor(stats[stat] / 5)}
        </div>
        <Progress
          percent={(stats[stat] % 5) * 20}
          progress
          color="brown"
        />
      </>
    ))}
  </div>
);

Stats.propTypes = {
  name: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired
}

export default Stats;
