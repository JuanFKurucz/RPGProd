import React from "react";
import Stats from "../profile/Stats";
import { Grid } from "semantic-ui-react";
import proficiencies from "../../assets/img/proficiencies/";

const Proficiency = (props) => {
  return (
    <section>
      <Grid container={true} className="profile">
        <Grid.Row centered columns={1} container={false}>
          {props.profile.proficiencies && (
            <Grid.Column computer={16} mobile={16}>
              <Stats
                name="Proficiencies"
                stats={props.profile.proficiencies}
                images={proficiencies}
              />
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </section>
  );
};

export default Proficiency;
