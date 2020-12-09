import React, { useState } from "react";

import { Button, Modal, Form, Image, Grid } from "semantic-ui-react";

import Markov from "../utils/markov";
import quests from "../assets/config/quests.json";
import sideQuest from "../assets/img/two-coins.png";
import quest from "../assets/img/treasure-map.png";
import bossFight from "../assets/img/evil-minion.png";
import strength from "../assets/img/weight-lifting-up.png";
import speed from "../assets/img/speedometer.png";
import intelligence from "../assets/img/artificial-intelligence.png";

const AddTask = (props) => {
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputPriority, setInputPriority] = useState(1);
  const [inputSkill, setInputSkill] = useState([]);

  const cleanStates = () => {
    const taskName = new Markov(2, quests).generateSentence(7);
    setInputTaskName(taskName);
    setInputPriority(1);
    setInputSkill([]);
  };

  const toggleInputSkill = (skill) => {
    let newSkills = [];
    if (inputSkill.indexOf(skill) !== -1) {
      newSkills = inputSkill.filter((element) => element !== skill);
    } else {
      newSkills = [...inputSkill, skill];
    }
    setInputSkill(newSkills);
  };

  return (
    <Modal
      dimmer={props.dimmer}
      open={props.open}
      onClose={() => cleanStates() && props.toggleTaskModal()}
    >
      <Modal.Header className="centerText">Add quest</Modal.Header>
      <Modal.Content>
        <Form>
          <Grid centered columns={1} container>
            <Grid.Row centered columns={3}>
              <Form.Field
                control="input"
                placeholder="Quest name"
                value={inputTaskName}
                onChange={(event) => setInputTaskName(event.target.value)}
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
                  onClick={() => setInputPriority(1)}
                  className="invert"
                  style={{ opacity: inputPriority === 1 ? 1 : 0.5 }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={quest}
                  size="tiny"
                  onClick={() => setInputPriority(2)}
                  className="invert"
                  style={{ opacity: inputPriority === 2 ? 1 : 0.5 }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={bossFight}
                  size="tiny"
                  onClick={() => setInputPriority(3)}
                  className="invert"
                  style={{ opacity: inputPriority === 3 ? 1 : 0.5 }}
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
                  onClick={() => toggleInputSkill("strength")}
                  className="invert"
                  style={{
                    opacity: inputSkill.indexOf("strength") !== -1 ? 1 : 0.5,
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={speed}
                  size="tiny"
                  onClick={() => toggleInputSkill("speed")}
                  className="invert"
                  style={{
                    opacity: inputSkill.indexOf("speed") !== -1 ? 1 : 0.5,
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={intelligence}
                  size="tiny"
                  onClick={() => toggleInputSkill("intelligence")}
                  className="invert"
                  style={{
                    opacity:
                      inputSkill.indexOf("intelligence") !== -1 ? 1 : 0.5,
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          onClick={() => cleanStates() && props.toggleTaskModal()}
        >
          Close
        </Button>
        <Button
          positive
          onClick={() =>
            props.addTask(inputTaskName, inputPriority, inputSkill)
          }
        >
          Add quest
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddTask;
