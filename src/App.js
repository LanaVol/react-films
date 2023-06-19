import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
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
        console.log("hjhjhg");
      });
  }

  render() {
    return (
      <>
        <Header />

        {this.state.error ? (
          <p>Oops, not found this page</p>
        ) : (
          <Main movies={this.state.movies} />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
