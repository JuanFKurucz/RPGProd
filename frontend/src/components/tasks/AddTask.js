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
  Label,
} from "reactstrap";

const AddTask = (props) => (
  <Modal isOpen={props.openTaskModal} toggle={props.toggleTaskModal}>
    <ModalHeader toggle={props.toggleTaskModal}>Add quest</ModalHeader>
    <ModalBody>
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Quest name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Task name"
            value={props.inputTaskName}
            onChange={(event) => props.setInputTaskName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Category</Label>
          <Input
            type="text"
            name="category"
            placeholder="Category name"
            value={props.inputCategoryName}
            onChange={(event) => props.setInputCategoryName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Priority</Label>
          <Input
            type="select"
            name="status"
            value={props.inputPriority}
            onChange={(event) => props.setInputPriority(event.target.value)}
          >
            <option value="1">Side quest</option>
            <option value="2">Quest</option>
            <option value="3">Boss fight</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Status</Label>
          <Input
            type="select"
            name="status"
            value={props.inputStatus}
            onChange={(event) => props.setInputStatus(event.target.value)}
          >
            <option value="idle">Idle</option>
            <option value="inprogress">In progress</option>
            <option value="completed">Completed</option>
          </Input>
        </FormGroup>
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.addTask}>
        Add quest
      </Button>{" "}
      <Button color="secondary" onClick={props.toggleTaskModal}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

export default AddTask;
