import { TrendingItem } from "./TrendingItem/TrendingItem";
import { MoviesUl } from "./TrendingMovies.styled";

export const TrendingMovies = ({movies}) => {
  return (
    <MoviesUl>
      {movies.map(item =>
        <li key={item.id}><TrendingItem movie={item} /></li>
      )}
    </MoviesUl>
  );
}