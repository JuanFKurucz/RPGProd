import React from 'react';

import { Grid, Icon, Image } from 'semantic-ui-react';

import budgets from '../../assets/img/budgets';
import coin from '../../assets/img/coin.png';
import { ProfileType } from '../../utils/types';
import Stat from '../profile/Stat';
import BudgetDiv from './Budget';

type BudgetProps = {
  profile: ProfileType;
  toggleAssignBudgetModal: (item: string) => void;
  deleteBudgetType: (item: string) => void;
};

const Budget = ({
  profile,
  toggleAssignBudgetModal,
  deleteBudgetType,
}: BudgetProps): React.ReactElement => (
  <section>
    <Grid container className="profile">
      <Grid.Row centered columns={1}>
        <BudgetDiv profile={profile} />
      </Grid.Row>
      <Grid.Row centered columns={1}>
        {profile.budgetItems &&
          Object.keys(profile.budgetItems).map((item) => (
            <React.Fragment key={item + 0}>
              <Grid.Column computer={4} mobile={4} key={`${item}-1`}>
                <Image
                  key={`${item}-2`}
                  src={budgets[profile.budgetItems[item].type || coin]}
                  size="tiny"
                  className="taskSkillImage"
                />
              </Grid.Column>
              <Grid.Column computer={10} mobile={8} key={item}>
                <Stat
                  key={item + 1}
                  name={item}
                  number={profile.budgetItems[item].actual}
                  total={profile.budgetItems[item].total}
                />
              </Grid.Column>
              {profile.budget > 0 && (
                <Grid.Column
                  computer={1}
                  mobile={2}
                  key={item + 2}
                  verticalAlign="middle"
                  style={{ marginTop: '2vh' }}
                >
                  <Icon
                    key={item + 3}
                    name="money"
                    onClick={() => {
                      toggleAssignBudgetModal(item);
                    }}
                    size="big"
                  />
                </Grid.Column>
              )}
              <Grid.Column
                computer={profile.budget > 0 ? 1 : 2}
                mobile={profile.budget > 0 ? 2 : 4}
                key={item + 4}
                verticalAlign="middle"
                style={{ marginTop: '2vh' }}
              >
                <Icon
                  key={item + 5}
                  name="trash"
                  onClick={() => {
                    deleteBudgetType(item);
                  }}
                  size="big"
                />
              </Grid.Column>
            </React.Fragment>
          ))}
      </Grid.Row>
    </Grid>
  </section>
);

export default Budget;
