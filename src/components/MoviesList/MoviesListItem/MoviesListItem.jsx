import { useLocation } from "react-router-dom";
import placeholder from 'images/placeholder.png';
import { MovieLink, MovieTitle } from "./MoviesListItem.styled";

export const MoviesListItem = ({ movie }) => {
  const location = useLocation();

  const calcNextUrl = () =>
    location.pathname.includes('movies') ? `${movie.id}` : `movies/${movie.id}`;

  return (
    <MovieLink to={calcNextUrl()} state={{from: location}} >
      <img 
        src={movie.poster_path
          ?`https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          : placeholder}
        width={200}
        alt="movie.original_title" />
      <MovieTitle>{movie.original_title ?? movie.original_name}</MovieTitle>
    </MovieLink>
  );
}