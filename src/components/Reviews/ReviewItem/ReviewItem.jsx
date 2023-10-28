import placeholder from 'images/placeholder-user.jpg';

export const ReviewItem = ({review}) => {
  return (
    <div>
      <img src={placeholder}
        width={100}
        alt={review.author} />
      <h3>{review.author}</h3>
      <p>Rating: {review.author_details.rating}</p>
      <p>{review.content}</p>
    </div>
  )
}
