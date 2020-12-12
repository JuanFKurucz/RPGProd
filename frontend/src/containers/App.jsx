import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Profile from '../components/profile';
import Proficiency from '../components/proficiency';
import Tasks from '../components/tasks';
import AddTask from './AddTask';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

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

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer };
    case 'CLOSE_MODAL':
      return { open: false };
    default:
      throw new Error();
  }
}

const getTasks = () => getFromLocalStorage('tasks', []);
const getProfile = () =>
  getFromLocalStorage('profile', {
    name: 'Niekto',
    avatar: null,
    level: 1,
    levelPure: 1,
    xp: 0,
    budget: 0,
    stats: {
      strength: 0,
      speed: 0,
      intelligence: 0,
    },
    proficiencies: {},
  });

const App = () => {
  const [profile, setProfile] = useState(getProfile());
  const [tasks, setTasks] = useState(getTasks());
  const [modalState, setModalState] = React.useReducer(modalReducer, {
    open: false,
    dimmer: undefined,
  });

  const saveTasks = (newTasks) => {
    saveToLocalStorage('tasks', newTasks);
    setTasks(newTasks);
  };

  const saveProfile = (newProfile) => {
    saveToLocalStorage('profile', newProfile);
    setProfile(newProfile);
  };

  const toggleTaskModal = () => {
    setModalState({
      type: modalState.open ? 'CLOSE_MODAL' : 'OPEN_MODAL',
      dimmer: 'blurring',
    });
  };

  const addTask = (inputTaskName, inputPriority, inputSkill, inputProficiency) => {
    const newTasks = [...tasks];
    const id = uuidv4();
    newTasks.push({
      id,
      name: inputTaskName,
      category: 'global',
      status: 'idle',
      startedAt: Date.now(),
      completedAt: null,
      priority: inputPriority,
      rewards: inputSkill,
      proficiencies: inputProficiency,
    });
    saveTasks(newTasks);
    toggleTaskModal();
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((element) => element.id !== id);
    saveTasks(newTasks);
  };

  const completeTask = (id) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((obj) => obj.id === id);
    newTasks[index].completedAt = Date.now();
    newTasks[index].status = 'completed';
    saveTasks(newTasks);

    const newProfile = { ...profile };
    newProfile.xp += Math.floor(Math.random() * 10) * newTasks[index].priority;
    newProfile.levelPure += newProfile.xp / (120 * newProfile.level);
    newProfile.level = Math.floor(newProfile.levelPure);
    Object.keys(newTasks[index].rewards).forEach((skill) => {
      newProfile.stats[newTasks[index].rewards[skill]] += 1;
    })
    if (!('proficiencies' in newProfile)) {
      newProfile.proficiencies = {};
    }
    Object.keys(newTasks[index].proficiencies).forEach((prof) => {
      if (!(newTasks[index].proficiencies[prof] in newProfile.proficiencies)) {
          newProfile.proficiencies[newTasks[index].proficiencies[prof]] = 0;
      }
      newProfile.proficiencies[newTasks[index].proficiencies[prof]] += 1;
    })
    saveProfile(newProfile);
  };

  const changeStatusTask = (id, status) => {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((obj) => obj.id === id);
    newTasks[index].status = status;
    saveTasks(newTasks);
  };

  return (
    <HashRouter basename="/">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route path="/quests">
          <AddTask
            open={modalState.open}
            dimmer={modalState.dimmer}
            toggleTaskModal={toggleTaskModal}
            addTask={addTask}
          />
          <Tasks
            taskList={tasks}
            deleteTask={deleteTask}
            completeTask={completeTask}
            changeStatusTask={changeStatusTask}
          />
          {!modalState.open && <Footer toggleTaskModal={toggleTaskModal} />}
        </Route>
        <Route path="/proficiency">
          <Proficiency profile={profile} />
        </Route>
        <Route path="/">
          <Profile profile={profile} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
