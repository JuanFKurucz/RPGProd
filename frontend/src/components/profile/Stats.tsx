import React from 'react';

import Stat from './Stat';

type StatsProps = {
  name: string;
  stats: Record<string, number>;
  images?: Record<string, string>;
};

const Stats = ({ name, stats, images = {} }: StatsProps): React.ReactElement => (
  <div className="centerText profileComponent">
    {name}
    {Object.keys(stats).map((stat) => (
      <Stat key={stat} name={stat} number={stats[stat]} image={images[stat]} />
    ))}
  </div>
);

export default Stats;
