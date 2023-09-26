import React from "react";

class PaginationComponent extends React.Component {
  state = {
    title: "",
    pageNumber: 1,
    countPaginPerPage: 7,
    pagesList: this.props.allPages.fill().map((_, index) => index + 1),
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
    let lastNumPaginPage;
    let firstNumPaginPage;

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
    const { pageNumber, pagesList } = this.state;
    const { allPages } = this.props;
    console.log(this.state.pagesList);

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

        {allPages.map((number, i) => {
          if (i !== 0 && i !== allPages.length - 1) {
            return (
              <li
                className={
                  +pageNumber === number
                    ? "active cyan darken-4"
                    : "waves-effect"
                }
                key={number}
                onClick={this.handleChoosePage}
              >
                <a href="#!">{number}</a>
              </li>
            );
          }
        })}

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
