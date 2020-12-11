import React from "react";
import PropTypes from 'prop-types';

import { Icon, Image, Grid } from "semantic-ui-react";

import strength from "../../assets/img/weight-lifting-up.png";
import speed from "../../assets/img/speedometer.png";
import intelligence from "../../assets/img/artificial-intelligence.png";
import proficiencies from "../../assets/img/proficiencies";

const rewards = {
  strength,
  speed,
  intelligence,
};

const Task = ({data,category,deleteTask,completeTask,changeStatusTask}) => (
  <div className={`centerText taskComponent task${data.status}`}>
    <Grid centered container={false}>
      <Grid.Row
        centered
        columns={3}
        container={false}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column
          centered
          computer={3}
          mobile={3}
          className="gridColumnTask"
        >
          {data.rewards &&
            data.rewards.map((x) => (
              <Image
                verticalAlign="middle"
                src={rewards[x]}
                size="mini"
                className="invert"
                inline
                style={{ width: "2em" }}
              />
            ))}
          {data.proficiencies &&
            data.proficiencies.map((x) => (
              <Image
                verticalAlign="middle"
                src={proficiencies[x]}
                size="mini"
                inline
                style={{ width: "2em" }}
              />
            ))}
        </Grid.Column>
        <Grid.Column computer={7} mobile={7} className="gridColumnTask">
          {category && (
            <span className="categoryName">{category}</span>
          )}
          {data.name}
        </Grid.Column>
        <Grid.Column width={5} className="gridColumnTask">
          <Grid centered container>
            <Grid.Row centered columns={3}>
              {data.status !== "completed" && (
                <Grid.Column>
                  {data.status !== "idle" && (
                    <Icon
                      name="pause"
                      onClick={() => {
                        changeStatusTask(data.id, "idle");
                      }}
                    />
                  )}
                  {data.status === "idle" && (
                    <Icon
                      name="play"
                      onClick={() => {
                        changeStatusTask(data.id, "inprogress");
                      }}
                    />
                  )}
                </Grid.Column>
              )}
              {data.status !== "completed" && (
                <Grid.Column>
                  <Icon
                    name="check"
                    onClick={() => {
                      completeTask(data.id);
                    }}
                  />
                </Grid.Column>
              )}
              <Grid.Column>
                <Icon
                  name="trash"
                  onClick={() => {
                    deleteTask(data.id);
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

Task.propTypes = {
  category: PropTypes.string,
  data: PropTypes.shape({
    id:PropTypes.string,
    name:PropTypes.string,
    status:PropTypes.string,
    rewards:PropTypes.arrayOf(PropTypes.string),
    proficiencies:PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  changeStatusTask: PropTypes.func.isRequired,
}

Task.defaultProps = {
  category:""
}

export default Task;
