import React from 'react';

type BudgetProps = { profile: { budget: number } };

const Budget = ({ profile }: BudgetProps): React.ReactElement => (
  <div className="centerText profileComponent">Budget: ${profile.budget || 0}</div>
);

export default Budget;
