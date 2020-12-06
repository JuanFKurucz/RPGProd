import React from "react";
import Column from "./Column";

const Tasks = (props) => {
  console.log(props.taskList);
  const categories = [...new Set(props.taskList.map((x) => x.category))];
  console.log(categories);
  return (
    <div className="tasks">
      {categories.map((x) => (
        <Column
          name={x}
          taskList={props.taskList.filter((y) => y.category === x)}
        />
      ))}
    </div>
  );
};

export default Tasks;
