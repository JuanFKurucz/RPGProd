import React from "react";

import { Button, Modal, Form } from "semantic-ui-react";

const AddTask = (props) => {
  return (
    <Modal
      dimmer={props.dimmer}
      open={props.open}
      onClose={props.toggleTaskModal}
    >
      <Modal.Header>Add quest</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            label="Quest name"
            control="input"
            placeholder="Category name"
            value={props.inputTaskName}
            onChange={(event) => props.setInputTaskName(event.target.value)}
          />
          <Form.Field
            label="Category name"
            control="input"
            placeholder="Category name"
            value={props.inputCategoryName}
            onChange={(event) => props.setInputCategoryName(event.target.value)}
          />
          <Form.Field
            label="Priority"
            control="select"
            value={props.inputPriority}
            onChange={(event) => props.setInputPriority(event.target.value)}
          >
            <option value="1">Side quest</option>
            <option value="2">Quest</option>
            <option value="3">Boss fight</option>
          </Form.Field>
          <Form.Field
            label="Priority"
            control="select"
            value={props.inputStatus}
            onChange={(event) => props.setInputStatus(event.target.value)}
          >
            <option value="idle">Idle</option>
            <option value="inprogress">In progress</option>
            <option value="completed">Completed</option>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={props.toggleTaskModal}>
          Close
        </Button>
        <Button positive onClick={props.addTask}>
          Add quest
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddTask;
