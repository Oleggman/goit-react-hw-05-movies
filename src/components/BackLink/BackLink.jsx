import { StyledBackLink } from "./BackLink.styled";
import { IoChevronBackOutline } from 'react-icons/io5';

export const BackLink = ({backLink}) => {
  return (
    <StyledBackLink to={backLink.current}>
      <IoChevronBackOutline />
    </StyledBackLink>
  );
}