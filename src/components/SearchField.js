import React from "react";
import { connect } from "react-redux";
import { setFilterText } from "../actions";
const SearchField = ({ dispatch, ...props }) => {
  let filterInput = "";
  return (
    <div className="form-group m-auto d-flex justify-content-center p-3">
      <input
        className="w-100 form-control mr-1"
        type="text"
        placeholder="Search Candidate by keywords"
        onKeyUp={e => {
          e.preventDefault();
          if (e.keyCode === 13) {
            dispatch(setFilterText(e.target.value));
          }
        }}
        ref={input => {
          filterInput = input;
        }}
      />
      <button
        className="btn btn-primary"
        onClick={e => {
          dispatch(setFilterText(filterInput.value));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default connect()(SearchField);
