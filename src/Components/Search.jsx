import React from "react";
import { useContextHook } from "../Context/context";

const Search = () => {
  const { dispatch } = useContextHook();

  const handleChange = (e) => {
    return dispatch({
      type: "FILTER_BY_SEARCH",
      payload: e.target.value.toLowerCase(),
    });
  };

  return (
    <form className="form">
      <label htmlFor="input" className="label">
        <h3>Search for cocktails</h3>
      </label>
      <input
        type={"text"}
        id="input"
        className="search-cocktail"
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
