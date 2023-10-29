import { MovieInput } from "components/MovieInput/MovieInput";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovie } from "services/movies-api";

const MoviesPage = () => {
  const [movies, setMovie] = useState([]);
  const [params] = useSearchParams();
  const query = params.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const getMovie = async () => {
      const data = await fetchMovie(query);
      setMovie(data.results);
    }

    getMovie();
  }, [query])
  
  return (
    <div>
      <MovieInput />
      <MoviesList movies={movies} />
    </div>
  )
}

export default MoviesPage;