import React from 'react';
import { HamburgerMenuContainer, IconWrapper, MenuList, MenuItem, Separator, AccountItem } from './HamburgerMenu.styles';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <HamburgerMenuContainer>
      <IconWrapper onClick={toggleMenu}>
        <FaBars className={`hamburger ${isOpen ? 'hide' : ''}`} />
        <FaTimes className={`close ${isOpen ? '' : 'hide'}`} />
      </IconWrapper>
      <MenuList isOpen={isOpen}>
        <MenuItem to="/home">HOME</MenuItem>
        <Separator />
        <MenuItem to="/services">SERVICES/PRODUCT</MenuItem>
        <Separator />
        <AccountItem to="/account">
          <FaUser />
          ACCOUNT
        </AccountItem>
      </MenuList>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;