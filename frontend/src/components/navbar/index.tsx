import React from 'react';

import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

type NavbarProps = { activeItem?: string };

const Navbar = ({ activeItem }: NavbarProps): React.ReactElement => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Link to="/">
        <Menu.Item name="profile" active={activeItem === 'profile'} />
      </Link>
      <Link to="/quests">
        <Menu.Item name="quests" active={activeItem === 'quests'} />
      </Link>
      <Link to="/proficiency">
        <Menu.Item name="proficiency" active={activeItem === 'proficiency'} />
      </Link>
      <Link to="/budget">
        <Menu.Item name="budget" active={activeItem === 'budget'} />
      </Link>
    </Menu>
  </Segment>
);

export default Navbar;
