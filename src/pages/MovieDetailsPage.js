import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  
  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    }

    getDetails();
  }, [movieId])
  

  return (
    <>{movie && <MovieInfo movie={movie}/>}</>
  )
}

export default MovieDetailsPage;