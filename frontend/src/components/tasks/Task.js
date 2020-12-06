import React from "react";
import { FaPlay, FaPause, FaCheck, FaTrash } from "react-icons/fa";

const Task = (props) => (
  <div className="centerText taskComponent">
    <div className="taskItem taskName">{props.name}</div>
    <div className="taskItem taskStatus">
      <FaTrash />
    </div>
    <div className="taskItem taskStatus">
      <FaCheck />
    </div>
    <div className="taskItem taskStatus">
      {props.status !== "idle" && <FaPlay />}
      {props.status === "idle" && <FaPause />}
    </div>
  </div>
);

export default Task;
