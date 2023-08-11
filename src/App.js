import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import Preloader from "./components/Preloader";
import React from "react";

class App extends React.Component {
  state = {
    movies: [],
    error: "",
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com?apikey=f10742f1&s=matrix")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((err) => {
        console.log("error");
      });
  }

  searchMovies = (str, type = "all") => {
    fetch(
      `http://www.omdbapi.com?apikey=f10742f1&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }))
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    return (
      <>
        <Header />

        {this.state.error ? (
          <p>Oops, not found this page</p>
        ) : this.state.movies.length ? (
          <Main movies={this.state.movies} searchMovies={this.searchMovies} />
        ) : (
          <Preloader />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
