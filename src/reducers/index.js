import { combineReducers } from "redux";
import listReducer from "./listReducer";
/**
 * Using a combined reducer so new reducers can be added later
 */
export default combineReducers({
  listReducer
});
