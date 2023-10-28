import { Link, useLocation } from "react-router-dom";

export const TrendingItem = ({ movie }) => {
  const location = useLocation();
  
  const calcNextUrl = () =>
    location.pathname.includes('movies') ? `${movie.id}` : `movies/${movie.id}`;

  return (
    <Link to={calcNextUrl()} >
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt="movie.original_title" />
      <h3>{movie.original_title}</h3>
    </Link>
  );
}