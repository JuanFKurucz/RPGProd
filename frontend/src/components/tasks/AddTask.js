import React from "react";

import { Button, Modal, Form, Image, Grid } from "semantic-ui-react";

import sideQuest from "../../assets/img/two-coins.png";
import quest from "../../assets/img/treasure-map.png";
import bossFight from "../../assets/img/evil-minion.png";
const AddTask = (props) => {
  return (
    <Modal
      dimmer={props.dimmer}
      open={props.open}
      onClose={props.toggleTaskModal}
    >
      <Modal.Header className="centerText">Add quest</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            control="input"
            placeholder="Quest name"
            value={props.inputTaskName}
            onChange={(event) => props.setInputTaskName(event.target.value)}
            onFocus={(event) => event.target.select()}
          />
          <Grid centered columns={1} container>
            <Grid.Row centered columns={3}>
              <Grid.Column>
                <Image
                  src={sideQuest}
                  size="tiny"
                  onClick={() => props.setInputPriority(1)}
                  className="invert"
                  style={{ opacity: props.inputPriority === 1 ? 1 : 0.5 }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={quest}
                  size="tiny"
                  onClick={() => props.setInputPriority(2)}
                  className="invert"
                  style={{ opacity: props.inputPriority === 2 ? 1 : 0.5 }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={bossFight}
                  size="tiny"
                  onClick={() => props.setInputPriority(3)}
                  className="invert"
                  style={{ opacity: props.inputPriority === 3 ? 1 : 0.5 }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
