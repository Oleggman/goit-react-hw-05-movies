import { useSearchParams } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'
import { SearchForm, Input, SubmitBtn } from "./MovieInput.styled";

export const MovieInput = () => {
  const [, setParams] = useSearchParams();

  const submitForm = evt => {
    evt.preventDefault();
    const query = evt.target.elements.movie.value;
    const nextParams = query ? { query } : {};
    setParams(nextParams);
  }

  return (
    <SearchForm onSubmit={submitForm}>
      <SubmitBtn type="submit">
        <BsSearch />
      </SubmitBtn>
      <Input name="movie" placeholder="Enter movie name" />
    </SearchForm>
  );
}