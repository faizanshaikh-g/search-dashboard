import { connect } from "react-redux";
import SearchField from "../components/SearchField";

const mapStateToProps = state => ({
  listItems: state.listReducer.listItems,
  filterText: state.listReducer.filterText
});

export default connect(mapStateToProps)(SearchField);
