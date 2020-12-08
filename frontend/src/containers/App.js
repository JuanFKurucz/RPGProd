import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Profile from "../components/profile";
import Tasks from "../components/tasks";
import AddTask from "../components/tasks/AddTask";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const getFromLocalStorage = (key, defaultValue) => {
  let storage = JSON.parse(localStorage.getItem(key));
  if (!storage) {
    storage = defaultValue;
  }
  return storage;
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

function modalReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

const getTasks = () => getFromLocalStorage("tasks", []);
const getProfile = () =>
  getFromLocalStorage("profile", {
    name: "Niekto",
    avatar: null,
    level: 1,
    levelPure: 1,
    xp: 0,
    stats: {
      strength: 0,
      speed: 0,
      intelligence: 0,
    },
  });

const App = () => {
  const [profile, setProfile] = useState(getProfile());
  const [tasks, setTasks] = useState(getTasks());
  const [modalState, setModalState] = React.useReducer(modalReducer, {
    open: false,
    dimmer: undefined,
  });
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputCategoryName, setInputCategoryName] = useState("");
  const [inputStatus, setInputStatus] = useState("idle");
  const [inputPriority, setInputPriority] = useState(1);

  const saveTasks = (newTasks) => {
    saveToLocalStorage("tasks", newTasks);
    setTasks(newTasks);
  };

  const saveProfile = (newProfile) => {
    saveToLocalStorage("profile", newProfile);
    setProfile(newProfile);
  };

  const addTask = () => {
    const newTasks = [...tasks];
    const id = uuidv4();
    newTasks.push({
      id,
      name: inputTaskName,
      category: inputCategoryName || "global",
      status: inputStatus || "idle",
      startedAt: Date.now(),
      completedAt: null,
      priority: inputPriority,
    });
    saveTasks(newTasks);
    toggleTaskModal();
  };

  const toggleTaskModal = () => {
    setInputTaskName("");
    setInputCategoryName("");
    setInputStatus("idle");
    setInputPriority(1);
    setModalState({
      type: modalState.open ? "CLOSE_MODAL" : "OPEN_MODAL",
      dimmer: "blurring",
    });
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((element) => element.id !== id);
    saveTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((obj) => obj.id === id);
    newTasks[index].completedAt = Date.now();
    newTasks[index].status = "completed";
    saveTasks(newTasks);

    const newProfile = { ...profile };
    newProfile.xp += Math.floor(Math.random() * 10) * newTasks[index].priority;
    newProfile.levelPure += newProfile.xp / (120 * newProfile.level);
    newProfile.level = Math.floor(newProfile.levelPure);
    saveProfile(newProfile);
  };

  const changeStatusTask = (id, status) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((obj) => obj.id === id);
    newTasks[index].status = status;
    saveTasks(newTasks);
  };

  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <div className="content">
          <Switch>
            <Route path="/quests">
              <AddTask
                open={modalState.open}
                dimmer={modalState.dimmer}
                toggleTaskModal={toggleTaskModal}
                inputTaskName={inputTaskName}
                setInputTaskName={setInputTaskName}
                addTask={addTask}
                inputCategoryName={inputCategoryName}
                setInputCategoryName={setInputCategoryName}
                inputStatus={inputStatus}
                setInputStatus={setInputStatus}
                inputPriority={inputPriority}
                setInputPriority={setInputPriority}
              />
              <Tasks
                taskList={tasks}
                deleteTask={deleteTask}
                completeTask={completeTask}
                changeStatusTask={changeStatusTask}
              />
              <div className="bottomNavbar">
                <Footer toggleTaskModal={toggleTaskModal} />
              </div>
            </Route>
            <Route path="/">
              <Profile profile={profile} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
