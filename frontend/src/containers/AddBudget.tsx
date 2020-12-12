import React, { useState, useEffect, ReactElement, ChangeEvent, FocusEvent } from 'react';

import { Button, Modal, Form, Grid } from 'semantic-ui-react';

type AddBudgetProps = {
  open: boolean;
  dimmer?: string;
  toggleTaskModal: () => void;
  addBudget: (type: string, budget: number) => void;
};

const AddBudget = ({ open, dimmer, toggleTaskModal, addBudget }: AddBudgetProps): ReactElement => {
  const [inputBudgetType, setInputBudgetType] = useState<string>('');
  const [inputBudget, setInputBudget] = useState<number>(0);

  const cleanStates = () => {
    setInputBudget(0);
    setInputBudgetType('');
  };

  useEffect(() => {
    if (open) {
      cleanStates();
    }
  }, [open]);

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
            <Grid.Row centered columns={3}>
              <Form.Field
                control="input"
                placeholder="Budget type (leave empty for general budget)"
                value={inputBudgetType}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setInputBudgetType(event.target.value)
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
                  onClick={() => addBudget(inputBudgetType, inputBudget)}
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
