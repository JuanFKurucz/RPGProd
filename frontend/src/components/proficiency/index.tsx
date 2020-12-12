import React from 'react';

import { Grid } from 'semantic-ui-react';

import proficiencies from '../../assets/img/proficiencies';
import { ProfileType } from '../../utils/types';
import Stats from '../profile/Stats';

type ProficiencyProps = { profile: ProfileType };

const Proficiency = ({ profile }: ProficiencyProps): React.ReactElement => (
  <section>
    <Grid container className="profile">
      <Grid.Row centered columns={1}>
        {profile.proficiencies && (
          <Grid.Column computer={16} mobile={16}>
            <Stats name="Proficiencies" stats={profile.proficiencies} images={proficiencies} />
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  </section>
);

export default Proficiency;
