import React from "react";
import Column from "./Column";

const Tasks = (props) => {
  const categories = [...new Set(props.taskList.map((x) => x.category))];
  return (
    <div className="tasks">
      {categories.map((x) => (
        <Column
          key={x}
          name={x}
          taskList={props.taskList.filter((y) => y.category === x)}
        />
      ))}
    </div>
  );
};

export default Tasks;
