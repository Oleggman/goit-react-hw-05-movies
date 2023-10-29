import { Error } from "./ErrorBox.styled";
import { TbFaceIdError } from 'react-icons/tb'

export const ErrorBox = () => {
  return (
    <Error>
      <TbFaceIdError /> Oops! Something went wrong :(
    </Error>
  );
}