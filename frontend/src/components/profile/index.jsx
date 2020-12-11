import React from "react";
import PropTypes from 'prop-types';

import { Grid } from "semantic-ui-react";

import Player from "./Player";
import Level from "./Level";
import Budget from "./Budget";
import Stats from "./Stats";

const Profile = ({profile}) => (
  <section>
    <Grid container className="profile">
      <Grid.Row centered columns={3} container={false}>
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

Profile.propTypes = {
  profile: PropTypes.shape({
    stats:PropTypes.objectOf(PropTypes.number),
  }).isRequired
}

export default Profile;
