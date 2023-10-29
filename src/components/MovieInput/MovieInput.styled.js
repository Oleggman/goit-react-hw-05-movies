import styled from "styled-components";

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 280px;
  height: 48px;
  display: block;
  margin: 0 auto;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 3px solid #433f3f;
  outline: none;
  padding: 10px;
  font-size: 16px;
  background-color: #d0c8bc;
  border-radius: 4px;
  margin-right: 10px;
  padding-left: 50px;
`;

export const SubmitBtn = styled.button`
  top: 32%;
  left: 10px;
  position: absolute;
  width: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;