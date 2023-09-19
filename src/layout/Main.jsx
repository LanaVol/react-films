import { Cards } from "../components/Cards";
import { Search } from "../components/Search";
import { PaginationComponent } from "../components/Pagination";

function Main({ movies, searchMovies, setPages, getTitleSearch, allResults }) {
  return (
    <main className="container content">
      <Search searchMovies={searchMovies} getTitleSearch={getTitleSearch} />
      <Cards movies={movies} />
      <PaginationComponent setPages={setPages} allResults={allResults} />
    </main>
  );
}

export { Main };
