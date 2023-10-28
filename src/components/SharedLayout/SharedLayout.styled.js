import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  top: 0;
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: rgb(22, 28, 45);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 32px;
  color: white;
  transition: color 200ms;

  &:hover {
    color: orange;
  }

  &.active {
    color: red;
  }
`;