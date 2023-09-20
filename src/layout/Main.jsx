import { Cards } from "../components/Cards";
import { Search } from "../components/Search";
import { PaginationComponent } from "../components/Pagination";

function Main({
  movies,
  searchMovies,
  setPages,
  getTitleSearch,
  allResults,
  currentMovie,
  countPerPage,
}) {
  const lastIndexMovie = currentMovie * countPerPage;
  const firstIndexMovie = lastIndexMovie - countPerPage;
  const currentMovies = movies.slice(firstIndexMovie, lastIndexMovie);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allResults / countPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} getTitleSearch={getTitleSearch} />
      <Cards movies={currentMovies} />
      <PaginationComponent
        setPages={setPages}
        allResults={allResults}
        countPerPage={countPerPage}
        allPages={pageNumbers}
      />
    </main>
  );
}

export { Main };
