import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { useState, useEffect, useRef, Suspense } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";
import { BackLink } from "components/BackLink/BackLink";
import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";
import { Loader } from "components/Loader/Loader";
import { ErrorBox } from "components/ErrorBox/ErrorBox";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setError(false);
    const getDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch {
        setError(true);
      }
    }

    getDetails();
  }, [movieId])

  return (
    <>
      <BackLink backLink={backLink} />
      {error && <ErrorBox />}
      {movie &&
          <>
          <MovieInfo movie={movie} />
          <AdditionalInfo />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      }
    </>
  )
}

export default MovieDetailsPage;