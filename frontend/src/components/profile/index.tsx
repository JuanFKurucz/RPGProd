import React from 'react';

import { Grid } from 'semantic-ui-react';

import Player from './Player';
import Level from './Level';
import Budget from '../budget/Budget';
import Stats from './Stats';
import { ProfileType } from '../../utils/types';

type ProfileProps = {
  profile: ProfileType;
};

const Profile = ({ profile }: ProfileProps): React.ReactElement => (
  <section>
    <Grid container className="profile">
      <Grid.Row centered columns={3}>
        <Grid.Column computer={5} mobile={16}>
          <Player profile={profile} />
        </Grid.Column>
        <Grid.Column computer={5} mobile={16}>
          <Level profile={profile} />
          <Budget profile={profile} />
        </Grid.Column>
        <Grid.Column computer={5} mobile={16}>
          <Stats name="Stats" stats={profile.stats} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </section>
);

export default Profile;
