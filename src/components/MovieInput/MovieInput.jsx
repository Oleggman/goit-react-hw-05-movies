import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieInput = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const submitForm = evt => {
    evt.preventDefault();
    const query = evt.target.elements.movie.value;
    const nextParams = query ? { query } : {};
    setParams(nextParams);
  }

  return (
    <form onSubmit={submitForm}>
      <input name="movie" placeholder="Enter movie name" />

      <button type="submit">Search</button>
    </form>
  );
}