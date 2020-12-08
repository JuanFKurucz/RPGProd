import React from "react";
import { Button } from "semantic-ui-react";

const Footer = (props) => (
  <Button primary onClick={props.toggleTaskModal}>
    Add quest
  </Button>
);

export default Footer;
