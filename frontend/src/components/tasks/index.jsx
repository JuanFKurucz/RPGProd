import React from "react";
import PropTypes from 'prop-types';

import { Grid } from "semantic-ui-react";

import Column from "./Column";

const prioritiesNames = {
  1: "Side quest",
  2: "Quest",
  3: "Boss fight",
};

const Tasks = ({taskList,deleteTask,completeTask,changeStatusTask}) => {
  const tasks = taskList.filter((y) => y.status !== "completed");
  const priorities = [...new Set(tasks.map((x) => x.priority))];
  priorities.sort((a, b) => b - a);
  return (
    <section>
      <div className="tasks">
        <Grid>
          <Grid.Row
            centered
            columns={3}
            container={false}
            textAlign="center"
            verticalAlign="top"
          >
            {priorities.map((x) => (
              <Grid.Column computer={5} mobile={16}>
                <Column
                  key={x}
                  name={prioritiesNames[x]}
                  taskList={tasks.filter((y) => y.priority === x)}
                  deleteTask={deleteTask}
                  completeTask={completeTask}
                  changeStatusTask={changeStatusTask}
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    </section>
  );
};

Tasks.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  changeStatusTask: PropTypes.func.isRequired,
}

export default Tasks;
