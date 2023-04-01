export const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return { ...state, loading: true };

    case "SUCCESS_FETCH":
      return { ...state, loading: false, cocktails: action.payload };

    case "SUCCESS_COCKTAIL":
      return { ...state, loading: false, singleCocktail: action.payload };

    case "FILTER_BY_SEARCH":
      return {
        ...state,
        loading: false,
        searchQuery: action.payload,
      };

    case "FAILURE":
      return { ...state, loading: false, cocktails: [] };
    default:
      return state;
  }
};
