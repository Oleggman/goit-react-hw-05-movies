import { TrendingItem } from "./TrendingItem/TrendingItem";

export const TrendingMovies = ({movies}) => {
  return (
    <ul>
      {movies.map(item =>
        <li key={item.id}><TrendingItem movie={item} /></li>
      )}
    </ul>
  );
}