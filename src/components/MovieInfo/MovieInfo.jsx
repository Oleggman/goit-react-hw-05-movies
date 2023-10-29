import placeholder from 'images/placeholder-2.png';
import { MovieBox, MovieDetailTitle, MovieDesc, GenreBox, GenreList } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  return (
    <MovieBox>
      <img
        src={movie.backdrop_path
          ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
          : placeholder}
        width={400}
        alt={movie.original_title} />
      <div>
        <MovieDetailTitle>{movie.original_title}</MovieDetailTitle>
        <MovieDesc>{movie.overview}</MovieDesc>
        <MovieDesc>Rating: {Math.round(movie.vote_average * 10, 2)}%</MovieDesc>
        <MovieDesc>Release Date: {new Date(movie.release_date).toLocaleDateString()}</MovieDesc>

        <GenreBox>
          <p>Genre:</p>
          <GenreList>
            {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </GenreList> 
        </GenreBox>
      </div>
    </MovieBox>
  )
}
