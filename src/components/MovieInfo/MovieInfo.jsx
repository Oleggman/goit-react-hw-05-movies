export const MovieInfo = ({ movie }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`} alt={movie.original_title} />
      <h3>{movie.original_title}</h3>
      <p>{movie.overview}</p>
      <p>Rating: {Math.round(movie.vote_average * 10, 2)}%</p>
      <p>Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>

      <div>
        Genre:
        <ul>
          {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul> 
      </div>
    </div>
  )
}
