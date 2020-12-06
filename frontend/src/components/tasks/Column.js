import React from "react";
import Task from "./Task";

const Column = (props) => (
  <div className="taskColumn">
    <div className="categoryName">{props.name}</div>
    {props.taskList.map((x) => (
      <Task
        key={x.id}
        data={x}
        deleteTask={props.deleteTask}
        completeTask={props.completeTask}
        changeStatusTask={props.changeStatusTask}
      />
    ))}
  </div>
);

export default Column;
