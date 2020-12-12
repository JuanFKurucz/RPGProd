import React, {
  useState,
  useEffect,
  ReactElement,
  DragEvent,
  ChangeEvent,
  FocusEvent,
} from 'react';

import { Button, Modal, Form, Image, Grid } from 'semantic-ui-react';

import questConfig from '../assets/config/quests.json';
import quests from '../assets/img/quests';
import skills from '../assets/img/skills';
import proficiencies from '../assets/img/proficiencies';
import Markov from '../utils/markov';

type AddTaskProps = {
  open: boolean;
  dimmer?: string;
  toggleTaskModal: () => void;
  addTask: (
    inputTaskName: string,
    inputPriority: number,
    inputSkill: string[],
    inputProficiency: string[]
  ) => void;
};

const AddTask = ({ open, dimmer, toggleTaskModal, addTask }: AddTaskProps): ReactElement => {
  const [inputTaskName, setInputTaskName] = useState<string>('');
  const [inputPriority, setInputPriority] = useState<number>(1);
  const [inputSkill, setInputSkill] = useState<string[]>([]);
  const [inputProficiency, setInputProficiency] = useState<string[]>([]);

  const cleanStates = () => {
    const taskName = new Markov(2, questConfig).generateSentence(7);
    setInputTaskName(taskName);
    setInputPriority(1);
    setInputSkill([]);
    setInputProficiency([]);
  };

  const toggleInputSkill = (skill: string): void => {
    let newSkills: string[] = [];
    if (inputSkill.indexOf(skill) !== -1) {
      newSkills = inputSkill.filter((element) => element !== skill);
    } else {
      newSkills = [...inputSkill, skill];
    }
    setInputSkill(newSkills);
  };
  const toggleInputProficiency = (skill: string) => {
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

  const preventDragHandler = (e: DragEvent) => {
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
      style={{ marginTop: 0, marginBottom: 0 }}
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
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setInputTaskName(event.target.value)
                }
                onFocus={(event: FocusEvent<HTMLInputElement>) => event.target.select()}
              />
            </Grid.Row>
            <Grid.Row centered columns={3}>
              Quest Type
              <br />
              {quests &&
                Object.keys(quests).map((key) => (
                  <Grid.Column key={key}>
                    <Image
                      key={key}
                      src={quests[key]}
                      size="tiny"
                      onClick={() => setInputPriority(Object.keys(quests).indexOf(key) + 1)}
                      className="taskSkillImage"
                      style={{
                        opacity: inputPriority === Object.keys(quests).indexOf(key) + 1 ? 1 : 0.5,
                      }}
                      onDragStart={preventDragHandler}
                    />
                  </Grid.Column>
                ))}
            </Grid.Row>
            <Grid.Row centered columns={3}>
              Quest rewards
              <br />
              {skills &&
                Object.keys(skills).map((key) => (
                  <Grid.Column key={key}>
                    <Image
                      key={key}
                      src={skills[key]}
                      size="tiny"
                      onClick={() => toggleInputSkill(key)}
                      className="taskSkillImage"
                      style={{
                        opacity: inputSkill.indexOf(key) !== -1 ? 1 : 0.5,
                      }}
                      onDragStart={preventDragHandler}
                    />
                  </Grid.Column>
                ))}
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
                        opacity: inputProficiency.indexOf(image) !== -1 ? 1 : 0.5,
                      }}
                      onDragStart={preventDragHandler}
                    />
                  </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>
          <Modal.Actions>
            <Grid.Row centered columns={3}>
              <Grid.Column
                centered
                style={{ textAlign: 'center', marginLeft: '2vw', marginRight: '2vw' }}
              >
                <Button
                  negative
                  onClick={() => {
                    toggleTaskModal();
                  }}
                  style={{ float: 'left' }}
                >
                  Close
                </Button>
                <Button
                  positive
                  onClick={() =>
                    addTask(inputTaskName, inputPriority, inputSkill, inputProficiency)
                  }
                  style={{ float: 'right' }}
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

export default AddTask;
