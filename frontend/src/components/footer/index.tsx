import React from 'react';

import { Icon } from 'semantic-ui-react';

type FooterProps = { toggleTaskModal: () => void };

const Footer = ({ toggleTaskModal }: FooterProps): React.ReactElement => (
  <Icon name="add circle" onClick={toggleTaskModal} className="addTaskIcon" size="huge" />
);

export default Footer;
