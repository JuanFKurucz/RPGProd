import React from 'react';

import { Icon, Image, Grid } from 'semantic-ui-react';

import skills from '../../assets/img/skills';
import proficiencies from '../../assets/img/proficiencies';

import {
  TaskType,
  DeleteTaskType,
  CompleteTaskType,
  ChangeStatusTaskType,
} from '../../utils/types';

type TaskProps = {
  data: TaskType;
  category?: string;
  deleteTask: DeleteTaskType;
  completeTask: CompleteTaskType;
  changeStatusTask: ChangeStatusTaskType;
};

const Task = ({
  data,
  category = '',
  deleteTask,
  completeTask,
  changeStatusTask,
}: TaskProps): React.ReactElement => (
  <div className={`centerText taskComponent task${data.status}`}>
    <Grid centered>
      <Grid.Row centered columns={3} textAlign="center" verticalAlign="middle">
        <Grid.Column centered computer={3} mobile={3} className="gridColumnTask">
          {data.rewards &&
            data.rewards.map((x) => (
              <Image
                key={x}
                verticalAlign="middle"
                src={skills[x]}
                size="mini"
                className="invert"
                inline
                style={{ width: '2em' }}
              />
            ))}
          {data.proficiencies &&
            data.proficiencies.map((x) => (
              <Image
                key={x}
                verticalAlign="middle"
                src={proficiencies[x]}
                size="mini"
                inline
                style={{ width: '2em' }}
              />
            ))}
        </Grid.Column>
        <Grid.Column computer={7} mobile={7} className="gridColumnTask">
          {category && <span className="categoryName">{category}</span>}
          {data.name}
        </Grid.Column>
        <Grid.Column width={5} className="gridColumnTask">
          <Grid centered container>
            <Grid.Row centered columns={3}>
              {data.status !== 'completed' && (
                <Grid.Column>
                  {data.status !== 'idle' && (
                    <Icon
                      name="pause"
                      onClick={() => {
                        changeStatusTask(data.id, 'idle');
                      }}
                    />
                  )}
                  {data.status === 'idle' && (
                    <Icon
                      name="play"
                      onClick={() => {
                        changeStatusTask(data.id, 'inprogress');
                      }}
                    />
                  )}
                </Grid.Column>
              )}
              {data.status !== 'completed' && (
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

export default Task;
