import React from "react";

class PaginationComponent extends React.Component {
  state = {
    title: "",
    pageNumber: 1,
    countPaginPerPage: 7,
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
  };
  previousPage = () => {
    if (+this.state.pageNumber === 1) {
      return;
    } else {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
      this.props.setPages(this.state.pageNumber);
    }
  };

  showPaginationPagePerPage = () => {
    let firstPaginNumber = lastPaginNumber - this.state.countPaginPerPage;
    let lastPaginNumber = this.state.pageNumber * this.state.countPaginPerPage;
    let currentPaginPages = this.props.allPages.slice(
      firstPaginNumber,
      lastPaginNumber
    );
    const listPaginNumber = [];

    for (
      let i = 1;
      i <= Math.ceil(this.props.allPages / this.state.countPaginPerPage);
      i++
    ) {
      listPaginNumber.push(i);
    }
  };

  render() {
    const { pageNumber } = this.state;
    const { allPages } = this.props;
    return (
      <ul className="pagination">
        <li
          className={+pageNumber === 1 ? "disabled" : "waves-effect"}
          onClick={this.previousPage}
          disabled={pageNumber === 1}
        >
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>

        <li
          onClick={this.handleChoosePage}
          className={
            +pageNumber === allPages[0]
              ? "active cyan darken-4"
              : "waves-effect"
          }
        >
          <a href="#!">{allPages[0]}</a>
        </li>

        {allPages.map((number, i) => (
          <li
            className={
              +pageNumber === number ? "active cyan darken-4" : "waves-effect"
            }
            key={number}
            onClick={this.handleChoosePage}
          >
            <a href="#!">{number}</a>
          </li>
        ))}

        <li
          onClick={this.handleChoosePage}
          className={
            +pageNumber === allPages[allPages.length - 1]
              ? "active cyan darken-4"
              : "waves-effect"
          }
        >
          <a href="#!">{allPages[allPages.length - 1]}</a>
        </li>

        <li
          className={
            +pageNumber === allPages[allPages.length - 1]
              ? "disabled"
              : "waves-effect"
          }
          onClick={this.nextPage}
          disabled={!allPages.length}
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
