import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import Preloader from "./components/Preloader";
import React from "react";
// appi_key
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    movies: [],
    error: false,
    loading: true,
    title: "",
    allResults: 1,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.Search,
          allResults: data.totalResults,
          loading: false,
        })
      )
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, error: true });
      });
  }

  searchMovies = (str, type = "all") => {
    fetch(
      `https://www.omdbapi.com?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loading: true });
        this.setState({
          movies: data.Search,
          allResults: data.totalResults,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, error: true });
      });
  };

  getTitleSearch = (str = "matrix") => {
    this.state.title = str;
  };

  setPages = (page) => {
    console.log(this.state.title);
    fetch(
      `https://www.omdbapi.com?apikey=${API_KEY}&s=${this.state.title}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data");
        // this.setState({ loading: true });
        // this.setState({ movies: data.Search, loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false, error: true });
      });
  };

  render() {
    const { movies, loading, error, allResults } = this.state;
    console.log(this.state);
    return (
      <>
        <Header />

        {error ? (
          <h3>Oops, not found this page</h3>
        ) : loading ? (
          <Preloader />
        ) : (
          <Main
            movies={movies}
            searchMovies={this.searchMovies}
            setPages={this.setPages}
            getTitleSearch={this.getTitleSearch}
            allResults={allResults}
          />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
