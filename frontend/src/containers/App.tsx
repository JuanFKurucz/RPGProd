import React, { useState, Reducer, ReactElement } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Profile from '../components/profile';
import Proficiency from '../components/proficiency';
import Tasks from '../components/tasks';
import AddTask from './AddTask';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { TaskType, ProfileType } from '../utils/types';

const getFromLocalStorage = (key: string, defaultValue: unknown) => {
  const localStorageValue = localStorage.getItem(key);
  return localStorageValue ? JSON.parse(localStorageValue) : defaultValue;
};

const saveToLocalStorage = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const modalReducer: Reducer<
  { open: boolean; dimmer?: string },
  { type: string; dimmer?: string }
> = (_state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer };
    case 'CLOSE_MODAL':
      return { open: false };
    default:
      throw new Error();
  }
};

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

const App = (): ReactElement => {
  const [profile, setProfile] = useState<ProfileType>(getProfile());
  const [tasks, setTasks] = useState<TaskType[]>(getTasks());
  const [modalState, setModalState] = React.useReducer(modalReducer, {
    open: false,
    dimmer: undefined,
  });

  const saveTasks = (newTasks: TaskType[]) => {
    saveToLocalStorage('tasks', newTasks);
    setTasks(newTasks);
  };

  const saveProfile = (newProfile: ProfileType) => {
    saveToLocalStorage('profile', newProfile);
    setProfile(newProfile);
  };

  const toggleTaskModal = () => {
    setModalState({
      type: modalState.open ? 'CLOSE_MODAL' : 'OPEN_MODAL',
      dimmer: 'blurring',
    });
  };

  const addTask = (
    inputTaskName: string,
    inputPriority: number,
    inputSkill: string[],
    inputProficiency: string[]
  ) => {
    const newTasks = [...tasks];
    const id = uuidv4();
    newTasks.push({
      id,
      name: inputTaskName,
      category: 'global',
      status: 'idle',
      startedAt: Date.now(),
      completedAt: undefined,
      priority: inputPriority,
      rewards: inputSkill,
      proficiencies: inputProficiency,
    });
    saveTasks(newTasks);
    toggleTaskModal();
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((element) => element.id !== id);
    saveTasks(newTasks);
  };

  const completeTask = (id: string) => {
    const newTasks = [...tasks];
    const currentTaskIndex = newTasks.findIndex((obj) => obj.id === id);
    newTasks[currentTaskIndex].completedAt = Date.now();
    newTasks[currentTaskIndex].status = 'completed';
    saveTasks(newTasks);

    const newProfile = { ...profile };
    newProfile.xp += Math.floor(Math.random() * 10) * newTasks[currentTaskIndex].priority;
    newProfile.levelPure += newProfile.xp / (120 * newProfile.level);
    newProfile.level = Math.floor(newProfile.levelPure);
    newTasks[currentTaskIndex].rewards.forEach((value) => {
      newProfile.stats[value] += 1;
    });
    newTasks[currentTaskIndex].proficiencies.forEach((value) => {
      if (!(value in newProfile.proficiencies)) {
        newProfile.proficiencies[value] = 0;
      }
      newProfile.proficiencies[value] += 1;
    });
    saveProfile(newProfile);
  };

  const changeStatusTask = (id: string, status: string) => {
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
