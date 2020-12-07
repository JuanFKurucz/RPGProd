import React from "react";
import { Button } from "reactstrap";

const Footer = (props) => (
  <Button color="primary" size="lg" block onClick={props.toggleTaskModal}>
    Add quest
  </Button>
);

export default Footer;
