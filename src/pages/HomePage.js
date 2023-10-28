import { TrendingMovies } from "components/TrendingMovies/TrendingMovies";
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
    <TrendingMovies movies={movies} />
  );
}

export default HomePage;