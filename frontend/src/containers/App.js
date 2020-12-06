import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/App.css";
import Profile from "../components/profile";
import Tasks from "../components/tasks";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

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

  const toggleProfile = () => setOpenProfile(!openProfile);

  const saveTasks = (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const addTask = () => {
    const newTasks = [...tasks];
    newTasks.push({
      name: inputTaskName,
      category: "global",
    });
    saveTasks(newTasks);
    toggleTaskModal();
  };
  const toggleTaskModal = () => {
    setInputTaskName("");
    setOpenTaskModal(!openTaskModal);
  };

  return (
    <>
      <header class="header">
        <span onClick={toggleProfile}>Close profile</span>
      </header>
      <div class="containerWeb">
        {openProfile && <Profile />}
        <section class="page">
          <Tasks taskList={tasks} />
        </section>
      </div>
      <div className="bottomNavbar">
        <Button color="primary" size="lg" block onClick={toggleTaskModal}>
          Add task
        </Button>
      </div>

      <div>
        <Modal isOpen={openTaskModal} toggle={toggleTaskModal}>
          <ModalHeader toggle={toggleTaskModal}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Task name"
                  value={inputTaskName}
                  onChange={(event) => setInputTaskName(event.target.value)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={addTask}>
              Add task
            </Button>{" "}
            <Button color="secondary" onClick={toggleTaskModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default App;
