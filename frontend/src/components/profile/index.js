import React from "react";
import Player from "./Player";
import Level from "./Level";
import Budget from "./Budget";
import Stats from "./Stats";
import { Grid } from "semantic-ui-react";

const Profile = (props) => {
  return (
    <section>
      <Grid container={true} className="profile">
        <Grid.Row centered columns={3} container={false}>
          <Grid.Column computer={5} mobile={16}>
            <Player profile={props.profile} />
          </Grid.Column>
          <Grid.Column computer={5} mobile={16}>
            <Level profile={props.profile} />
            <Budget profile={props.profile} />
          </Grid.Column>
          <Grid.Column computer={5} mobile={16}>
            <Stats profile={props.profile} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  );
};

export default Profile;
