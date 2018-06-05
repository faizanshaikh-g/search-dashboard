import React from "react";
import TableRow from "../components/TableRow";
import PropTypes from "prop-types";
const ResultTable = props => {
  let listItems = props.listItems;
  let listMeta = props.listMeta;
  if (listItems.length === 0) {
    return (
      <div className="row p-3">
        <span className="m-auto lead">
          Sorry no records found,<br />update the search criteria to get results
        </span>
      </div>
    );
  } else {
    return (
      <div className="table-responsive">
        <table className="table table-striped  p-auto">
          <thead>
            <tr>
              {listMeta.map((metaInfo, i) => <th key={i}>{metaInfo.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {listItems.map((listItem, i) => (
              <TableRow key={i} item={listItem} listMeta={listMeta} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

ResultTable.propTypes = {
  listItems: PropTypes.array,
  listMeta: PropTypes.array.isRequired
};
export default ResultTable;
