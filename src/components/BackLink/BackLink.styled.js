import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBackLink = styled(Link)`
  font-size: 28px;
  color: white;
  padding: 8px 16px;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  transition: background-color 200ms;

  &:hover {
    background-color: #BE3F27;
  }
`;