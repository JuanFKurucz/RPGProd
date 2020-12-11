import React from "react";
import PropTypes from 'prop-types';

import { Grid } from "semantic-ui-react";

import proficiencies from "../../assets/img/proficiencies";
import Stats from "../profile/Stats";

const Proficiency = ({profile}) => (
  <section>
    <Grid container className="profile">
      <Grid.Row centered columns={1} container={false}>
        {profile.proficiencies && (
          <Grid.Column computer={16} mobile={16}>
            <Stats
              name="Proficiencies"
              stats={profile.proficiencies}
              images={proficiencies}
            />
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  </section>
);


Proficiency.propTypes = {
  profile: PropTypes.shape({
    proficiencies: PropTypes.objectOf(PropTypes.number),
  }).isRequired
}


export default Proficiency;
