import React from "react";

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

const AddTask = (props) => (
  <Modal isOpen={props.openTaskModal} toggle={props.toggleTaskModal}>
    <ModalHeader toggle={props.toggleTaskModal}>Modal title</ModalHeader>
    <ModalBody>
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Task name"
            value={props.inputTaskName}
            onChange={(event) => props.setInputTaskName(event.target.value)}
          />
        </FormGroup>
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.addTask}>
        Add task
      </Button>{" "}
      <Button color="secondary" onClick={props.toggleTaskModal}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

export default AddTask;
