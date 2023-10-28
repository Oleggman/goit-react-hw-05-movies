import { TrendingMovies } from "components/TrendingMovies/TrendingMovies";
import { useEffect, useState } from "react";
import {
  fetchMovie,
  fetchTrending,
  fetchMovieCast,
  fetchMovieReviews
} from "services/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const data = await fetchTrending();
      console.log(data);
      setMovies(data.results);
    }

    getTrending();
  }, [])
  

  return (
    <TrendingMovies movies={movies} />
  );
}

export default HomePage;