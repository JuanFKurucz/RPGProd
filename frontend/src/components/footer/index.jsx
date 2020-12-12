import React from "react";
import PropTypes from 'prop-types';

import { Icon } from "semantic-ui-react";

const Footer = ({toggleTaskModal}) => (
  <Icon
    name="add circle"
    onClick={toggleTaskModal}
    className="addTaskIcon"
    size="huge"
  />
)

Footer.propTypes = {
  toggleTaskModal: PropTypes.func.isRequired
}


export default Footer;
