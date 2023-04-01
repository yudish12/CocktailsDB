const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const url2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php";

const url3 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";

export const initialFetch = async (dispatch, searchQuery) => {
  try {
    await dispatch({
      type: "REQUEST",
    });
    const response = await fetch(`${url}`);
    const data = await response.json();

    await dispatch({ type: "SUCCESS_FETCH", payload: data.drinks });
  } catch (error) {
    dispatch({ type: "FAILURE", payload: error });
  }
};

export const getByID = async (dispatch, id) => {
  try {
    await dispatch({ type: "REQUEST" });

    const response = await fetch(`${url2}?i=${id}`);
    const data = await response.json();

    await dispatch({ type: "SUCCESS_COCKTAIL", payload: data.drinks[0] });
  } catch (error) {
    dispatch({ type: "FAILURE", payload: error });
  }
};

export const getByCategory = async (dispatch, c) => {
  try {
    await dispatch({ type: "REQUEST" });
    const response = await fetch(`${url3}c=${c}`);
    const data = await response.json();
    console.log(data);
    await dispatch({ type: "SUCCESS_FETCH", payload: data.drinks });
  } catch (error) {
    dispatch({ type: "FAILURE", payload: error });
  }
};
