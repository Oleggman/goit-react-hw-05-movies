import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/movies-api";
import { CreditItem } from "./CreditItem/CreditItem";

const Credits = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data.cast);
    }

    getCast();
  }, [movieId])
  
  return (
    <ul>
      {cast.map(actor => 
        <li key={actor.cast_id}><CreditItem actor={actor} /></li>)}
    </ul>
  )
}

export default Credits;