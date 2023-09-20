import React from "react";

class PaginationComponent extends React.Component {
  state = {
    title: "",
    pageNumber: 1,
  };

  handleChoosePage = (e) => {
    this.setState({ pageNumber: e.target.text });
    this.props.setPages(this.state.pageNumber);
  };

  nextPage = () => {
    if (+this.state.pageNumber === this.props.allPages.length) {
      return;
    } else {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
      this.props.setPages(this.state.pageNumber);
    }
    // console.log(this.props.allPages.length);
    // console.log(this.state.pageNumber);
  };
  previousPage = () => {
    if (+this.state.pageNumber === 1) {
      return;
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
      this.props.setPages(this.state.pageNumber);
    }
  };

  render() {
    return (
      <ul className="pagination">
        <li
          className={+this.state.pageNumber === 1 ? "disabled" : "waves-effect"}
          onClick={this.previousPage}
        >
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {this.props.allPages.map((number, i) => (
          <li
            className={
              +this.state.pageNumber === number
                ? "active cyan darken-4"
                : "waves-effect"
            }
            key={number}
            onClick={this.handleChoosePage}
          >
            <a href="#!">{number}</a>
          </li>
        ))}
        <li
          className={
            +this.state.pageNumber ===
            this.props.allPages[this.props.allPages.length - 1]
              ? "disabled"
              : "waves-effect"
          }
          onClick={this.nextPage}
        >
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    );
  }
}

export { PaginationComponent };
