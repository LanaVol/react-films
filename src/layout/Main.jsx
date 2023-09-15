import { Cards } from "../components/Cards";
import { Search } from "../components/Search";
import { PaginationComponent } from "../components/Pagination";

function Main({ movies, searchMovies, setPages, getTitleSearch }) {
  return (
    <main className="container content">
      <Search searchMovies={searchMovies} getTitleSearch={getTitleSearch} />
      <Cards movies={movies} />
      <PaginationComponent setPages={setPages} />
    </main>
  );
}

export { Main };
