import React from 'react';

import { Grid } from 'semantic-ui-react';

import { TaskType } from '../../utils/types';
import Column from './Column';

type TasksProps = {
  taskList: Array<TaskType>;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  changeStatusTask: (id: string, status: string) => void;
};

const prioritiesNames: Record<number, string> = {
  1: 'Side quest',
  2: 'Quest',
  3: 'Boss fight',
};

const Tasks = ({
  taskList,
  deleteTask,
  completeTask,
  changeStatusTask,
}: TasksProps): React.ReactElement => {
  const tasks = taskList.filter((y) => y.status !== 'completed');
  const priorities: number[] = [...new Set(tasks.map((x) => x.priority))];
  priorities.sort((a: number, b: number) => b - a);
  return (
    <section>
      <div className="tasks">
        <Grid style={{ margin: 0, padding: 0 }}>
          <Grid.Row centered columns={3} textAlign="center" verticalAlign="top">
            {priorities.map((x) => (
              <Grid.Column computer={5} mobile={16} style={{ margin: 0, padding: 0 }}>
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

export default Tasks;
