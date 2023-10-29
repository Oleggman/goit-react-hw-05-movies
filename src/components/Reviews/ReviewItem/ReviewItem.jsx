import placeholder from 'images/placeholder-user.jpg';
import { ReviewBox } from './ReviewItem.styled';

export const ReviewItem = ({review}) => {
  return (
    <ReviewBox>
      <img src={placeholder}
        width={100}
        height={100}
        alt={review.author} />
      <div>
        <h3>{review.author}</h3>
        <p>Rating: {review.author_details.rating}</p>
        <p>{review.content}</p>
      </div>
    </ReviewBox>
  )
}
