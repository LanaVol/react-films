import { Cards } from "../components/Cards";
import { Search } from "../components/Search";

function Main({ movies, searchMovies, setPages }) {
  console.log(setPages);
  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      <Cards movies={movies} />
    </main>
  );
}

export { Main };
