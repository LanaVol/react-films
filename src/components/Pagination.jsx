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
    return (
      <ul className="pagination" onClick={this.handleChoosePage}>
        <li className="active">
          <a href="#!">1</a>
        </li>
        <li className="waves-effect">
          <a href="#!">2</a>
        </li>
        <li className="waves-effect">
          <a href="#!">3</a>
        </li>
        <li className="waves-effect">
          <a href="#!">4</a>
        </li>
        <li className="waves-effect">
          <a href="#!">5</a>
        </li>
      </ul>
    );
  }
}

export { PaginationComponent };

// import { useState } from "react";

// export const PaginationComponent = ({ setPages }) => {
//   const [pageNum, sePageNum] = useState(1);

//   const handleClick = (num) => {
//     console.log(num);
//   };

//   return (
//     <ul className="pagination" onClick={(e) => handleClick(e.target.text)}>
//       <li className="active">
//         <a href="#!">1</a>
//       </li>
//       <li className="waves-effect">
//         <a href="#!">2</a>
//       </li>
//       <li className="waves-effect">
//         <a href="#!">3</a>
//       </li>
//       <li className="waves-effect">
//         <a href="#!">4</a>
//       </li>
//       <li className="waves-effect">
//         <a href="#!">5</a>
//       </li>
//     </ul>
//   );
// };
