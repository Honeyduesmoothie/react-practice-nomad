import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Details() {
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  async function getMovieDetail() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
    setDetail(json.data.movie);
  }
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      <h1>{detail.title}</h1>
      <img src={detail.medium_cover_image} alt={detail.title} />
      <p>{detail.description_full}</p>
      <ul>
        {detail.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
      <p>{detail.year}</p>
      <p>{detail.rating}</p>
      <p>{detail.runtime} minutes</p>
    </div>
  );
}

export default Details;
