import React from 'react';

import { Progress, Image } from 'semantic-ui-react';

type StatProps = {
  name: string;
  number: number;
  image?: string;
  total?: number;
};

const Stat = ({ name, number, total = 0, image = '' }: StatProps): React.ReactElement => (
  <>
    <div className="text-center categoryName">
      {image && <Image src={image} size="tiny" className="taskSkillImage" />}
      {name.replace(/_/gi, ' ')} - Level: {Math.floor(number / total)}
    </div>
    <Progress percent={(number / total) * 100} progress color="brown" />
  </>
);

export default Stat;
