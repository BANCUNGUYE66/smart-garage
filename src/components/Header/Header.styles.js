import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 60px;
    height: auto;
    margin-right: 0.5rem;
  }

  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 63px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.div`
  cursor: pointer;
  margin-left: 1rem;
  

  @media (max-width: 768px) {
    display: none;
  }
`;
