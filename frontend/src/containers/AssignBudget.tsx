import React, { useState, useEffect, ReactElement, ChangeEvent, FocusEvent } from 'react';

import { Button, Modal, Form, Grid } from 'semantic-ui-react';

type AssignBudgetProps = {
  open: boolean;
  dimmer?: string;
  budgetType?: string;
  toggleTaskModal: (item?: string) => void;
  assignBudget: (budgetType: string, budget: number) => void;
};

const AssignBudget = ({
  open,
  dimmer,
  budgetType,
  toggleTaskModal,
  assignBudget,
}: AssignBudgetProps): ReactElement => {
  const [inputBudget, setInputBudget] = useState<number>(0);

  const cleanStates = () => {
    setInputBudget(0);
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
        <h2 className="centerText">Assign budget to {budgetType}</h2>
        <Form>
          <Grid centered columns={1} container>
            <Grid.Row centered columns={3}>
              <Form.Field
                control="input"
                placeholder="Quest name"
                value={inputBudget}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setInputBudget(parseFloat(event.target.value))
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
                  onClick={() => assignBudget(budgetType || '', inputBudget)}
                  style={{ float: 'right' }}
                >
                  Assign budget
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default AssignBudget;
