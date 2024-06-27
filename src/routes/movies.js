import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Details() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  async function getMovieDetail() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {loading ? "" : <MovieDetail detail={detail} />}
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <span>Return to Home</span>
      </Link>
    </div>
  );
}

export default Details;
