import { Card } from "./Card";

function Cards({ movies = [] }) {
  return (
    <div className="cards">
      {movies.length ? (
        movies.map((movie) => <Card movie={movie} key={movie.imdbID} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Cards };
