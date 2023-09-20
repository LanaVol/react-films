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

  render() {
    console.log(this.state.pageNumber);
    return (
      <ul className="pagination">
        {this.props.allPages.map((number) => (
          <li
            className="waves-effect"
            key={number}
            onClick={this.handleChoosePage}
          >
            <a href="#!">{number}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export { PaginationComponent };
