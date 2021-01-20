export default function Movie({ movie }) {
  return <div className="col-md-3 mb-3">
    <div className="card">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.name}
      />
      <div className="card-body">
        <h5 className="card-text">{movie.title}</h5>
      </div>
    </div>
  </div>
}