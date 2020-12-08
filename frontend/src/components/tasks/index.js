import React from "react";
import Column from "./Column";

const prioritiesNames = {
  1: "Side quest",
  2: "Quest",
  3: "Boss fight",
};

const Tasks = (props) => {
  const priorities = [...new Set(props.taskList.map((x) => x.priority))];
  priorities.sort((a, b) => b - a);
  return (
    <section>
      <div className="tasks">
        {priorities.map((x) => (
          <Column
            key={x}
            name={prioritiesNames[x]}
            taskList={props.taskList.filter((y) => y.priority === x)}
            deleteTask={props.deleteTask}
            completeTask={props.completeTask}
            changeStatusTask={props.changeStatusTask}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
