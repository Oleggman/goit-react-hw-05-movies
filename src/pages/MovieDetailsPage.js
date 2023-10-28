import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  
  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    }

    getDetails();
  }, [movieId])
  

  return (
    <>
    <NavLink to={location.state?.from ?? '/movies'}>Back</NavLink>
    {movie &&
        <>
        <MovieInfo movie={movie} />
        <ul>
          <li><NavLink to="cast">Cast</NavLink></li>
          <li><NavLink to="reviews">Reviews</NavLink></li>
        </ul>

        <Outlet />
      </>
    }
    </>
  )
}

export default MovieDetailsPage;