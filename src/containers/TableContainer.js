import { connect } from "react-redux";
import ResultTable from "../components/ResultTable";
import * as constants from "../utils/constants";

const mapStateToProps = state => {
  return {
    listItems: state.listReducer.listItems,
    filterText: state.listReducer.filterText,
    listMeta: constants.LIST_META
  };
};

export default connect(mapStateToProps)(ResultTable);
