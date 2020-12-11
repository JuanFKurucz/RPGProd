import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { Button, Modal, Form, Image, Grid } from "semantic-ui-react";

import quests from "../assets/config/quests.json";
import sideQuest from "../assets/img/two-coins.png";
import quest from "../assets/img/treasure-map.png";
import bossFight from "../assets/img/evil-minion.png";
import strength from "../assets/img/weight-lifting-up.png";
import speed from "../assets/img/speedometer.png";
import intelligence from "../assets/img/artificial-intelligence.png";
import proficiencies from "../assets/img/proficiencies";
import Markov from "../utils/markov";


const AddTask = ({open,dimmer,toggleTaskModal,addTask}) => {
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputPriority, setInputPriority] = useState(1);
  const [inputSkill, setInputSkill] = useState([]);
  const [inputProficiency, setInputProficiency] = useState([]);

  const cleanStates = () => {
    const taskName = new Markov(2, quests).generateSentence(7);
    setInputTaskName(taskName);
    setInputPriority(1);
    setInputSkill([]);
    setInputProficiency([]);
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
  const toggleInputProficiency = (skill) => {
    let newSkills = [];
    if (inputProficiency.indexOf(skill) !== -1) {
      newSkills = inputProficiency.filter((element) => element !== skill);
    } else {
      newSkills = [...inputProficiency, skill];
    }
    setInputProficiency(newSkills);
  };

  useEffect(() => {
    if (open) {
      cleanStates();
    }
  }, [open]);

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      dimmer={dimmer}
      open={open}
      onClose={() => {
        toggleTaskModal();
      }}
      size="mini"
      basic
      centered
      style={{marginTop:0,marginBottom:0}}
    >
      <Modal.Content>
        <h2 className="centerText">Add quest</h2>
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
              <br />
              <Grid.Column>
                <Image
                  src={sideQuest}
                  size="tiny"
                  onClick={() => setInputPriority(1)}
                  className="taskSkillImage"
                  style={{ opacity: inputPriority === 1 ? 1 : 0.5 }}
                  onDragStart={preventDragHandler}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={quest}
                  size="tiny"
                  onClick={() => setInputPriority(2)}
                  className="taskSkillImage"
                  style={{ opacity: inputPriority === 2 ? 1 : 0.5 }}
                  onDragStart={preventDragHandler}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={bossFight}
                  size="tiny"
                  onClick={() => setInputPriority(3)}
                  className="taskSkillImage"
                  style={{ opacity: inputPriority === 3 ? 1 : 0.5 }}
                  onDragStart={preventDragHandler}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
              Quest rewards
              <br />
              <Grid.Column>
                <Image
                  src={strength}
                  size="tiny"
                  onClick={() => toggleInputSkill("strength")}
                  className="taskSkillImage"
                  style={{
                    opacity: inputSkill.indexOf("strength") !== -1 ? 1 : 0.5,
                  }}
                  onDragStart={preventDragHandler}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={speed}
                  size="tiny"
                  onClick={() => toggleInputSkill("speed")}
                  className="taskSkillImage"
                  style={{
                    opacity: inputSkill.indexOf("speed") !== -1 ? 1 : 0.5,
                  }}
                  onDragStart={preventDragHandler}
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={intelligence}
                  size="tiny"
                  onClick={() => toggleInputSkill("intelligence")}
                  className="taskSkillImage"
                  style={{
                    opacity:
                      inputSkill.indexOf("intelligence") !== -1 ? 1 : 0.5,
                  }}
                  onDragStart={preventDragHandler}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={4}>
              Quest proficiencies
              <br />
              {proficiencies &&
                Object.keys(proficiencies).map((image) => (
                  <Grid.Column centered key={image}>
                    <Image
                      key={image}
                      src={proficiencies[image]}
                      size="tiny"
                      onClick={() => toggleInputProficiency(image)}
                      className="taskSkillImage taskSkillProficiency"
                      style={{
                        opacity:
                          inputProficiency.indexOf(image) !== -1 ? 1 : 0.5,
                      }}
                      onDragStart={preventDragHandler}
                    />
                  </Grid.Column>
                  )
                )}
            </Grid.Row>
          </Grid>
          <Modal.Actions>
            <Grid.Row centered columns={3}>
              <Grid.Column centered style={{textAlign:"center",marginLeft:"2vw",marginRight:"2vw"}}>
                <Button
                  negative
                  onClick={() => {
                    toggleTaskModal();
                  }}
                  style={{float:"left"}}
                >
                  Close
                </Button>
                <Button
                  positive
                  onClick={() =>
                    addTask(
                      inputTaskName,
                      inputPriority,
                      inputSkill,
                      inputProficiency
                    )}
                  style={{float:"right"}}
                >
                  Add quest
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

AddTask.propTypes = {
  open: PropTypes.bool.isRequired,
  dimmer: PropTypes.bool.isRequired,
  toggleTaskModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
}


export default AddTask;
