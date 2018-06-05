import React, { Component } from "react";
import TableContainer from "../containers/TableContainer";
import SearchContainer from "../containers/SearchContainer";
import PaginationContainer from "../containers/PaginationContainer";
class MainPanel extends Component {
  /**
   * Uses the smart components which renders the dumb components
   * @returns {string}
   */
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            <SearchContainer />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            <TableContainer />
          </div>
        </div>
        <div className="row position-fixed bottom-0  w-100">
          <div className="col-md-12 col-sm-12 ">
            <PaginationContainer />
          </div>
        </div>
      </div>
    );
  }
}
export default MainPanel;
