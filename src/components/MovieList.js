import { Link } from "react-router-dom";

function MovieList({ movie }) {
  return (
    <div id={movie.id}>
      <img src={movie.medium_cover_image} alt={`${movie.title} cover`} />
      <Link to={`/movies/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
export default MovieList;
