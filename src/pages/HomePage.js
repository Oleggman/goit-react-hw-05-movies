import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { fetchTrending } from "services/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTrending = async () => {
      const data = await fetchTrending();
      setIsLoading(false);
      setMovies(data.results);
    }

    getTrending();
  }, [])
  

  return (
    <>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </>
  );
}

export default HomePage;