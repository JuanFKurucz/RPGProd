import React from 'react';

import Task from './Task';
import {
  TaskType,
  DeleteTaskType,
  CompleteTaskType,
  ChangeStatusTaskType,
} from '../../utils/types';

type ColumnProps = {
  name: string;
  taskList: Array<TaskType>;
  deleteTask: DeleteTaskType;
  completeTask: CompleteTaskType;
  changeStatusTask: ChangeStatusTaskType;
};

const Column = ({
  name,
  taskList,
  deleteTask,
  completeTask,
  changeStatusTask,
}: ColumnProps): React.ReactElement => (
  <div className="taskColumn">
    <div className="categoryName">{name}</div>
    {taskList.map((x) => (
      <Task
        key={x.id}
        data={x}
        deleteTask={deleteTask}
        completeTask={completeTask}
        changeStatusTask={changeStatusTask}
      />
    ))}
  </div>
);

export default Column;
