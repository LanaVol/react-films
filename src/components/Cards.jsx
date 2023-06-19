import { Card } from "./Card";

function Cards({ movies = [] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => {
        return <Card movie={movie} key={movie.imdbID} />;
      })}
    </div>
  );
}

export { Cards };
