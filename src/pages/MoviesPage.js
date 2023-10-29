import { Loader } from "components/Loader/Loader";
import { MovieInput } from "components/MovieInput/MovieInput";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovie } from "services/movies-api";

const MoviesPage = () => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();
  const query = params.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    const getMovie = async () => {
      try {
        const data = await fetchMovie(query);
        if (!data.results.length) {
          throw new Error("Error");
        }
        setMovie(data.results);
      } catch (error) {
        toast.error(`Nothing was found with query ${query}!`)
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [query])
  
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <MovieInput />
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </div>
  )
}

export default MoviesPage;