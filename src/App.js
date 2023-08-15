import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import Preloader from "./components/Preloader";
import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    movies: [],
    error: "",
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log("error");
      });
  }

  searchMovies = (str, type = "all") => {
    // this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loading: true });
        this.setState({ movies: data.Search, loading: false });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    const { movies, loading, error } = this.state;
    return (
      <>
        <Header />

        {/* {error ? (
          <p>Oops, not found this page</p>
        ) : loading ? (
          <Preloader />
        ) : (
          <Main movies={movies} searchMovies={this.searchMovies} />
        )} */}
        {loading ? (
          <Preloader />
        ) : (
          <Main movies={movies} searchMovies={this.searchMovies} />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
