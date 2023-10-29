import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { useState, useEffect, useRef, Suspense } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";
import { BackLink } from "components/BackLink/BackLink";
import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";

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
    <BackLink backLink={backLink} />
    {movie &&
        <>
        <MovieInfo movie={movie} />
        <AdditionalInfo />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    }
    </>
  )
}

export default MovieDetailsPage;