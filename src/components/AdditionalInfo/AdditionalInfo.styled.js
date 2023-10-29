import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledInfoTitle = styled.h3`
  margin-left: 40px;
  font-size: 28px;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const InfoNavList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 20px 40px;
`;

export const StyledInfoLink = styled(NavLink)`
  font-size: 24px;
  color: white;
  transition: color 200ms;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  &:hover {
    color: tomato;
  }

  &.active {
    color: red;
  }
`;