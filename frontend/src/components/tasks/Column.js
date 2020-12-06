import React from "react";
import Task from "./Task";

const Column = (props) => (
  <div className="taskColumn">
    <div className="categoryName">{props.name}</div>
    {props.taskList.map((x) => (
      <Task key={x.id} name={x.name} />
    ))}
  </div>
);

export default Column;
