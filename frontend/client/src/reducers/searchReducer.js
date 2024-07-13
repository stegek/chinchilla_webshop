export default function searchReducer(searchState, action) {
  switch (action.type) {
    case "INPUT":
      console.log(action.payload);
      return { ...searchState, searchState: action.payload };

    case "REMOVE":
      return {
        ...searchState,
        searchState: "",
      };

    default:
      return searchState;
  }
}
