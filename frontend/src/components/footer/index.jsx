import React from "react";
import PropTypes from 'prop-types';

import { Button } from "semantic-ui-react";

const Footer = ({toggleTaskModal}) => (
  <Button primary onClick={toggleTaskModal}>
    Add quest
  </Button>
)

Footer.propTypes = {
  toggleTaskModal: PropTypes.func.isRequired
}


export default Footer;
