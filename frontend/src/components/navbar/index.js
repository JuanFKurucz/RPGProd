import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Link to="/">
        <Menu.Item name="profile" active={props.activeItem === "profile"} />
      </Link>
      <Link to="/quests">
        <Menu.Item name="quests" active={props.activeItem === "quests"} />
      </Link>
      <Link to="/proficiency">
        <Menu.Item
          name="proficiency"
          active={props.activeItem === "proficiency"}
        />
      </Link>
      <Link to="/budget">
        <Menu.Item name="budget" active={props.activeItem === "budget"} />
      </Link>
    </Menu>
  </Segment>
);

export default Navbar;
