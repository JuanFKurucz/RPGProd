import React from "react";
import PropTypes from 'prop-types';

import { Progress } from "semantic-ui-react";

const Level = ({profile}) => (
  <div className="centerText profileComponent">
    <div className="text-center">
      XP: 
      {' '}
      {profile.xp}
    </div>
    <div className="text-center">
      Level:
      {' '}
      {profile.level}
    </div>
    <Progress
      percent={Math.round((profile.levelPure % 1) * 100)}
      progress
      color="brown"
    />
  </div>
);

Level.propTypes = {
  profile: PropTypes.shape({
    xp: PropTypes.number,
    level: PropTypes.number,
    levelPure: PropTypes.number,
  }).isRequired
}

export default Level;
