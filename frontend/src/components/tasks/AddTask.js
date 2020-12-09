import React from "react";

import { Button, Modal, Form, Image, Grid } from "semantic-ui-react";

import sideQuest from "../../assets/img/two-coins.png";
import quest from "../../assets/img/treasure-map.png";
import bossFight from "../../assets/img/evil-minion.png";
import strength from "../../assets/img/weight-lifting-up.png";
import speed from "../../assets/img/speedometer.png";
import intelligence from "../../assets/img/artificial-intelligence.png";

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
          <Grid centered columns={1} container>
            <Grid.Row centered columns={3}>
              <Form.Field
                control="input"
                placeholder="Quest name"
                value={props.inputTaskName}
                onChange={(event) => props.setInputTaskName(event.target.value)}
                onFocus={(event) => event.target.select()}
              />
            </Grid.Row>
            <Grid.Row centered columns={3}>
              Quest Type
            </Grid.Row>
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
            <Grid.Row centered columns={3}>
              Quest rewards
            </Grid.Row>
            <Grid.Row centered columns={3}>
              <Grid.Column>
                <Image
                  src={strength}
                  size="tiny"
                  onClick={() => props.toggleInputSkill("strength")}
                  className="invert"
                  style={{
                    opacity:
                      props.inputSkill.indexOf("strength") !== -1 ? 1 : 0.5,
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={speed}
                  size="tiny"
                  onClick={() => props.toggleInputSkill("speed")}
                  className="invert"
                  style={{
                    opacity: props.inputSkill.indexOf("speed") !== -1 ? 1 : 0.5,
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={intelligence}
                  size="tiny"
                  onClick={() => props.toggleInputSkill("intelligence")}
                  className="invert"
                  style={{
                    opacity:
                      props.inputSkill.indexOf("intelligence") !== -1 ? 1 : 0.5,
                  }}
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
