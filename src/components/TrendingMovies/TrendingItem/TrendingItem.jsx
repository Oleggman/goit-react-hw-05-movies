import { Link, useLocation } from "react-router-dom";
import placeholder from 'images/placeholder.png';

export const TrendingItem = ({ movie }) => {
  const location = useLocation();

  const calcNextUrl = () =>
    location.pathname.includes('movies') ? `${movie.id}` : `movies/${movie.id}`;

  return (
    <Link to={calcNextUrl()} state={{from: location}} >
      <img 
        src={movie.poster_path
          ?`https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          : placeholder}
        width={300}
        alt="movie.original_title" />
      <h3>{movie.original_title}</h3>
    </Link>
  );
}