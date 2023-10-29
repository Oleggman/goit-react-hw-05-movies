import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  top: 0;
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #BE3F27;
  box-shadow: 1px 4px 17px 4px rgba(178,7,7,0.75);
  -webkit-box-shadow: 1px 4px 17px 4px rgba(178,7,7,0.75);
  -moz-box-shadow: 1px 4px 17px 4px rgba(178,7,7,0.75);
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
  width: fit-content;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-left: 50px;
  margin-top: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 36px;
  font-weight: 700;
  color: white;
  transition: color 200ms;
  padding: 5px 10px;
  &:hover {
    color: #252A32;
  }

  &.active {
    color: black;
    box-shadow: -2px 2px 13px 7px rgba(0,0,0,0.75) inset;
    text-shadow: -7px 2px 6px rgba(0,0,0,0.6);
    background-color: antiquewhite;
    border-radius: 10px;
  }
`;