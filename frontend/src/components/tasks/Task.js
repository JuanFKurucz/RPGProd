import React from "react";
import { Icon } from "semantic-ui-react";

const Task = (props) => {
  return (
    <div className={"centerText taskComponent task" + props.data.status}>
      <div className="taskItem taskName">
        {props.category && (
          <span className="categoryName">{props.category}</span>
        )}
        {props.data.name}
      </div>
      <div className="taskItem taskStatus">
        <Icon
          name="trash"
          onClick={() => {
            props.deleteTask(props.data.id);
          }}
        />
      </div>
      {props.data.status !== "completed" && (
        <div className="taskItem taskStatus">
          <Icon
            name="check"
            onClick={() => {
              props.completeTask(props.data.id);
            }}
          />
        </div>
      )}
      {props.data.status !== "completed" && (
        <div className="taskItem taskStatus">
          {props.data.status !== "idle" && (
            <Icon
              name="pause"
              onClick={() => {
                props.changeStatusTask(props.data.id, "idle");
              }}
            />
          )}
          {props.data.status === "idle" && (
            <Icon
              name="play"
              onClick={() => {
                props.changeStatusTask(props.data.id, "inprogress");
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
