import React from "react";
import { Icon, Image, Grid } from "semantic-ui-react";

import strength from "../../assets/img/weight-lifting-up.png";
import speed from "../../assets/img/speedometer.png";
import intelligence from "../../assets/img/artificial-intelligence.png";

const rewards = {
  strength: strength,
  speed: speed,
  intelligence: intelligence,
};

const Task = (props) => {
  return (
    <div className={"centerText taskComponent task" + props.data.status}>
      <Grid centered container={false}>
        <Grid.Row centered columns={2} container={false}>
          <Grid.Column width={9} style={{ paddingLeft: "-5px" }}>
            {props.data.rewards &&
              props.data.rewards.map((x) => (
                <Image
                  verticalAlign="middle"
                  src={rewards[x]}
                  size="mini"
                  className="invert"
                  inline
                  style={{ width: "5vw" }}
                />
              ))}
            {props.category && (
              <span className="categoryName">{props.category}</span>
            )}
            {props.data.name}
          </Grid.Column>
          <Grid.Column width={7}>
            <Grid centered container>
              <Grid.Row centered columns={3}>
                {props.data.status !== "completed" && (
                  <Grid.Column>
                    {props.data.status !== "idle" && (
                      <Icon
                        name="pause"
                        onClick={() => {
                          props.changeStatusTask(props.data.id, "idle");
                        }}
                      />
                    )}
                    {props.data.status === "idle" && (
                      <Icon
                        name="play"
                        onClick={() => {
                          props.changeStatusTask(props.data.id, "inprogress");
                        }}
                      />
                    )}
                  </Grid.Column>
                )}
                {props.data.status !== "completed" && (
                  <Grid.Column>
                    <Icon
                      name="check"
                      onClick={() => {
                        props.completeTask(props.data.id);
                      }}
                    />
                  </Grid.Column>
                )}
                <Grid.Column>
                  <Icon
                    name="trash"
                    onClick={() => {
                      props.deleteTask(props.data.id);
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
};

export default Task;
