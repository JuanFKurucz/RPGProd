import React from "react";
import Task from "./Task";

const Column = (props) => {
  console.log("hi");
  console.log(props);
  return (
    <div className="taskColumn">
      <div className="categoryName">{props.name}</div>
      {props.taskList.map((x) => (
        <Task name={x.name} />
      ))}
    </div>
  );
};

export default Column;
