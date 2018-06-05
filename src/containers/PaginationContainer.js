import { connect } from "react-redux";
import Pagination from "../components/Pagination";

const mapStateToProps = state => ({
  listItems: state.listReducer.listItems,
  itemAllPages: state.listReducer.itemAllPages,
  currentPage: state.listReducer.currentPage,
  itemsPerPage: state.listReducer.itemsPerPage
});

export default connect(mapStateToProps)(Pagination);
