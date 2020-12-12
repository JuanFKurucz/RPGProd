import React from 'react';

import { Progress, Image } from 'semantic-ui-react';

type StatProps = {
  name: string;
  number: number;
  image?: string;
};

const Stat = ({ name, number, image = '' }: StatProps): React.ReactElement => (
  <>
    <div className="text-center categoryName">
      {image && <Image src={image} size="tiny" className="taskSkillImage" />}
      {name.replace(/_/gi, ' ')} - Level: {Math.floor(number / 5)}
    </div>
    <Progress percent={(number % 5) * 20} progress color="brown" />
  </>
);

export default Stat;
