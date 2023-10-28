import placeholder from 'images/placeholder-user.jpg';

export const CreditItem = ({ actor }) => {
  return (
    <div>
      <img src={actor.profile_path
          ?`https://image.tmdb.org/t/p/w300${actor.profile_path}`
        : placeholder}
        width={100}
        alt="" />
      <h3>{actor.name}</h3>
      <p>Character: {actor.character}</p>
    </div>
  )
}
