import { MoviesListItem } from "./MoviesListItem/MoviesListItem";
import { MoviesUl } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  return (
    <MoviesUl>
      {movies.map(item =>
        <li key={item.id}><MoviesListItem movie={item} /></li>
      )}
    </MoviesUl>
  );
}