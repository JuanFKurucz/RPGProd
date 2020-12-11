import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const Column = ({name,taskList,deleteTask,completeTask,changeStatusTask}) => (
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

Column.propTypes = {
  name: PropTypes.string.isRequired,
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  changeStatusTask: PropTypes.func.isRequired,
}

export default Column;
