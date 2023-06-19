import { Cards } from "../components/Cards";

function Main({ movies }) {
  return (
    <main className="container content">
      <Cards movies={movies} />
    </main>
  );
}

export { Main };
