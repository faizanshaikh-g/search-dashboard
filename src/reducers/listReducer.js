import * as constants from "../utils/constants";
/**
 * this reducer has two actions -
 *  CHANGE_PAGE - takes page number to get the paged list,
 *  UPDATE_FILTER - takes filter text to get the filtered list
 */
const listReducer = (state = constants.getInitialState(), action) => {
  let filteredList = [],
    pagedList = [];
  switch (action.type) {
    case "CHANGE_PAGE":
      filteredList = getCustomFilteredList(
        state.filterText,
        constants.LIST_ITEMS,
        constants.LIST_META
      );
      pagedList = getPagedList(
        action.currentPage,
        state.itemsPerPage,
        filteredList
      );
      return {
        ...state,
        listItems: pagedList,
        currentPage: action.currentPage
      };
    case "UPDATE_FILTER":
      filteredList = getCustomFilteredList(
        action.filterText,
        constants.LIST_ITEMS,
        constants.LIST_META
      );
      pagedList = getPagedList(1, state.itemsPerPage, filteredList); //move to first page on new search
      return {
        ...state,
        filterText: action.filterText,
        listItems: pagedList,
        itemAllPages: filteredList,
        currentPage: 1
      };
    default:
      return state;
  }
};
const getCustomFilteredList = (value, list, meta) => {
  let filteredList = [];
  if (value && value.trim().length !== 0) {
    list.map((listItem, i) => {
      meta.map((metaItem, i) => {
        if (
          listItem[metaItem.key]
            .toString()
            .trim()
            .toLowerCase()
            .indexOf(value.toLowerCase()) !== -1
        ) {
          filteredList.push(listItem);
        }
        return true;
      });
      return true;
    });
  }
  filteredList = [...new Set(filteredList)];
  return filteredList;
};

const getPagedList = (currentPage, itemsPerPage, filteredList) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);
  return currentItems;
};
export default listReducer;
