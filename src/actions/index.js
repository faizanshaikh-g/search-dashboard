export const changeSearchPage = currentPage => ({
  type: "CHANGE_PAGE",
  currentPage
});

export const setFilterText = filterText => ({
  type: "UPDATE_FILTER",
  filterText
});
