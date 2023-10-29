import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/movies-api";
import { CreditItem } from "./CreditItem/CreditItem";
import { CastList, CastItem } from "./Credits.styled";

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
    <CastList>
      {cast.map(actor => 
        <CastItem key={actor.cast_id}><CreditItem actor={actor} /></CastItem>)}
    </CastList>
  )
}

export default Credits;