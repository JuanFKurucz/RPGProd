import React from 'react';

import { Progress } from 'semantic-ui-react';

type LevelProps = { profile: { xp: number; level: number; levelPure: number } };

const Level = ({ profile }: LevelProps): React.ReactElement => (
  <div className="centerText profileComponent">
    <div className="text-center">
      XP:
      {profile.xp}
    </div>
    <div className="text-center">
      Level:
      {profile.level}
    </div>
    <Progress percent={Math.round((profile.levelPure % 1) * 100)} progress color="brown" />
  </div>
);

export default Level;
