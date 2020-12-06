import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/App.css";

import Profile from "../components/profile";
import Tasks from "../components/tasks";
import AddTask from "../components/tasks/AddTask";
import Footer from "../components/footer";

const getTasks = () => {
  let storageTasks = JSON.parse(localStorage.getItem("tasks"));
  if (!storageTasks) {
    storageTasks = [];
  }
  return storageTasks;
};

const App = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [openProfile, setOpenProfile] = useState(true);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputCategoryName, setInputCategoryName] = useState("");
  const [inputStatus, setInputStatus] = useState("idle");

  const toggleProfile = () => setOpenProfile(!openProfile);

  const saveTasks = (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const addTask = () => {
    const newTasks = [...tasks];
    const id = uuidv4();
    newTasks.push({
      id,
      name: inputTaskName,
      category: inputCategoryName || "global",
      status: inputStatus || "idle",
    });
    saveTasks(newTasks);
    toggleTaskModal();
  };
  const toggleTaskModal = () => {
    setInputTaskName("");
    setOpenTaskModal(!openTaskModal);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((element) => element.id !== id);
    saveTasks(newTasks);
  };

  const completeTask = (id) => {};

  const changeStatusTask = (id, status) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((obj) => obj.id === id);
    newTasks[index].status = status;
    saveTasks(newTasks);
  };

  return (
    <>
      <header className="header">
        <span onClick={toggleProfile}>Close profile</span>
      </header>
      <div className="containerWeb">
        {openProfile && <Profile />}
        <section className="page">
          <Tasks
            taskList={tasks}
            deleteTask={deleteTask}
            completeTask={completeTask}
            changeStatusTask={changeStatusTask}
          />
        </section>
      </div>
      <div className="bottomNavbar">
        <Footer toggleTaskModal={toggleTaskModal} />
      </div>

      <AddTask
        openTaskModal={openTaskModal}
        toggleTaskModal={toggleTaskModal}
        inputTaskName={inputTaskName}
        setInputTaskName={setInputTaskName}
        addTask={addTask}
      />
    </>
  );
};

export default App;
