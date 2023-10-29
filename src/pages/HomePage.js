import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { fetchTrending } from "services/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const data = await fetchTrending();
      setMovies(data.results);
    }

    getTrending();
  }, [])
  

  return (
    <MoviesList movies={movies} />
  );
}

export default HomePage;