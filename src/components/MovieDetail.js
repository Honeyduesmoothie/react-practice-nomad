function MovieDetail({ detail }) {
  return (
    <div>
      <h1>{detail.title}</h1>
      <img src={detail.medium_cover_image} alt={detail.title} />
      <p>{detail.description_full}</p>
      <h4>Genres</h4>
      <ul>
        {detail.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>Year: {detail.year}</p>
      <p>Rating: {detail.rating}</p>
      <p>Runtime: {detail.runtime} minutes</p>
    </div>
  );
}

export default MovieDetail;
