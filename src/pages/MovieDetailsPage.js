import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { useState, useEffect, useRef, Suspense } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    }

    getDetails();
  }, [movieId])

  return (
    <>
    <NavLink to={backLink.current}>Back</NavLink>
    {movie &&
        <>
        <MovieInfo movie={movie} />
        <ul>
          <li><NavLink to="cast">Cast</NavLink></li>
          <li><NavLink to="reviews">Reviews</NavLink></li>
        </ul>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    }
    </>
  )
}

export default MovieDetailsPage;