import { StyledInfoTitle, InfoNavList, StyledInfoLink } from "./AdditionalInfo.styled";

export const AdditionalInfo = () => {
  return (
    <>
      <StyledInfoTitle>Additional information</StyledInfoTitle>
      <InfoNavList>
        <li><StyledInfoLink to="cast">Cast</StyledInfoLink></li>
        <li><StyledInfoLink to="reviews">Reviews</StyledInfoLink></li>
      </InfoNavList>
    </>
  );
}