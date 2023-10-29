import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/movies-api";
import { ReviewItem } from "./ReviewItem/ReviewItem";
import { ReviewList } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data.results);
    }

    getCast();
  }, [movieId])

  return (
    <ReviewList>
      {reviews.map(review => 
        <li key={review.id}>
          <ReviewItem review={review}/>
        </li>
      )}
     </ReviewList>
  )
}

export default Reviews;