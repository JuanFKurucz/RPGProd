import React, { useState, useEffect, ReactElement, ChangeEvent, FocusEvent } from 'react';

import { Button, Modal, Form, Grid, Image } from 'semantic-ui-react';

import budgets from '../assets/img/budgets';

type AddBudgetProps = {
  open: boolean;
  dimmer?: string;
  toggleTaskModal: () => void;
  addBudget: (type: string, budget: number, budgetType: string) => void;
};

const AddBudget = ({ open, dimmer, toggleTaskModal, addBudget }: AddBudgetProps): ReactElement => {
  const [inputBudgetType, setInputBudgetType] = useState<string>('');
  const [inputBudgetName, setInputBudgetName] = useState<string>('');
  const [inputBudget, setInputBudget] = useState<number>(0);

  const cleanStates = () => {
    setInputBudget(0);
    setInputBudgetType('');
    setInputBudgetName('');
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
        <h2 className="centerText">Add budget</h2>
        <Form>
          <Grid centered columns={1} container>
            <Grid.Row centered columns={4}>
              {budgets &&
                Object.keys(budgets).map((key) => (
                  <Grid.Column key={key}>
                    <Image
                      key={key}
                      src={budgets[key]}
                      size="tiny"
                      onClick={() => setInputBudgetType(key)}
                      className="taskSkillImage"
                      style={{
                        opacity: inputBudgetType === key ? 1 : 0.5,
                      }}
                      onDragStart={preventDragHandler}
                    />
                  </Grid.Column>
                ))}
            </Grid.Row>
            <Grid.Row centered columns={3}>
              <Form.Field
                control="input"
                placeholder="Budget type (leave empty for general budget)"
                value={inputBudgetName}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setInputBudgetName(event.target.value)
                }
                onFocus={(event: FocusEvent<HTMLInputElement>) => event.target.select()}
              />
            </Grid.Row>
            <Grid.Row centered columns={3}>
              <Form.Field
                control="input"
                placeholder="Amount"
                value={inputBudget}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setInputBudget(event.target.value ? parseFloat(event.target.value) : 0)
                }
                onFocus={(event: FocusEvent<HTMLInputElement>) => event.target.select()}
              />
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
                  onClick={() => addBudget(inputBudgetName, inputBudget, inputBudgetType)}
                  style={{ float: 'right' }}
                >
                  Add budget
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AddBudget;
