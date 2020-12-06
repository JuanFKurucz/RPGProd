import React from "react";
import { FaPlay, FaPause, FaCheck, FaTrash } from "react-icons/fa";

const Task = (props) => {
  return (
    <div className="centerText taskComponent">
      <div className="taskItem taskName">{props.data.name}</div>
      <div className="taskItem taskStatus">
        <FaTrash
          onClick={() => {
            props.deleteTask(props.data.id);
          }}
        />
      </div>
      <div className="taskItem taskStatus">
        <FaCheck
          onClick={() => {
            props.completeTask(props.data.id);
          }}
        />
      </div>
      <div className="taskItem taskStatus">
        {props.data.status !== "idle" && (
          <FaPause
            onClick={() => {
              props.changeStatusTask(props.data.id, "idle");
            }}
          />
        )}
        {props.data.status === "idle" && (
          <FaPlay
            onClick={() => {
              props.changeStatusTask(props.data.id, "inprogress");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
