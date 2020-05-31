import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper, MenuList, ListWrapper } from '../layout/style/Header';

const Header = () => {
  return (
    <HeaderWrapper>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/">
            Home
          </NavLink>
        </ListWrapper>
      </MenuList>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/todo">
            Todo
          </NavLink>
        </ListWrapper>
      </MenuList>
      <MenuList>
        <ListWrapper>
          <NavLink style={{ textDecoration: 'none' }} to="/about">
            About
          </NavLink>
        </ListWrapper>
      </MenuList>
    </HeaderWrapper>
  );
};

export default Header;
