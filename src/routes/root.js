import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";

function Root() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      <h1>Nomad Movie Home</h1>
      {loading ? (
        <h3>'Loading...'</h3>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieList movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Root;
