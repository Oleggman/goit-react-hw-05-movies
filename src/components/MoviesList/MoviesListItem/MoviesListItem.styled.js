import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
  display: inline-block;
  width: 100%;
  max-width: 200px;
  transition: transform 200ms;

  &:hover {
    transform: scale(105%);
    h3 {
      color: red;
    }
  }
`;

export const MovieTitle = styled.h3`
  margin: 0;
  padding: 10px 5px 5px;
  color: white;
  transition: color 200ms;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;