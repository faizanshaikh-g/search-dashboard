import React from "react";
import { connect } from "react-redux";
import { changeSearchPage } from "../actions";
const Pagination = ({ dispatch, ...props }) => {
  const { itemAllPages, currentPage, itemsPerPage, listItems } = props;
  //does not render the component when no list items are present
  if (!listItems.length) {
    return null;
  }
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemAllPages.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => {
    let activeClass = "page-item";
    if (number === currentPage) {
      activeClass += " active";
    }
    return (
      <li className={activeClass} key={number}>
        <button
          className="page-link"
          id={number}
          onClick={e => {
            dispatch(changeSearchPage(Number(e.target.id)));
          }}
        >
          {number}
        </button>
      </li>
    );
  });

  return (
    <div className="d-flex justify-content-center">
      <ul id="page-numbers" className="pagination">
        {renderPageNumbers}
      </ul>
    </div>
  );
};
export default connect()(Pagination);
