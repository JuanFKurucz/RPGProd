import React from 'react';

import { ProfileType } from '../../utils/types';

type BudgetProps = { profile: ProfileType };

const Budget = ({ profile }: BudgetProps): React.ReactElement => (
  <div className="centerText profileComponent">Budget: ${profile.budget || 0}</div>
);

export default Budget;
