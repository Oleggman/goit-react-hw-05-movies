import styled from "styled-components";

export const MovieBox = styled.div`
padding: 40px 120px;
  display: flex;
  gap: 60px;
  justify-content: space-between;
`;  

export const MovieDetailTitle = styled.h3`
  color: #BBBBBB;
  font-size: 40px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: 40px;
`;

export const MovieDesc = styled.p`
  font-size: 20px;
  color: #BBBBBB;
  margin-bottom: 20px;
  line-height: 1.2;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const GenreBox = styled.div`
  display: flex;
  gap: 12px;
  font-size: 20px;
  color: #BBBBBB;
`;

export const GenreList = styled.ul`
  display: flex;
  gap: 12px;
  color: red;
`;