import placeholder from 'images/placeholder-user.jpg';
import { ActorBox } from './CreditItem.styled';

export const CreditItem = ({ actor }) => {
  return (
    <ActorBox>
      <img src={actor.profile_path
          ?`https://image.tmdb.org/t/p/w300${actor.profile_path}`
        : placeholder}
        width={100}
        alt="" />
      <h3>{actor.name}</h3>
      <p>Character: {actor.character}</p>
    </ActorBox>
  )
}
