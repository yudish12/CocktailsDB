import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextHook } from "../Context/context";
import { getByID } from "../fetchdata";
import ScaleLoader from "react-spinners/ScaleLoader";

const SingleCocktail = () => {
  const { id } = useParams();
  const { dispatch, state } = useContextHook();
  useEffect(() => {
    getByID(dispatch, id);
  }, [dispatch, id]);

  const {
    strDrinkThumb,
    strDrink,
    strAlcoholic,
    strCategory,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = state.singleCocktail;

  if (state.loading) {
    return (
      <div className="loader">
        <ScaleLoader
          color="#003e6a"
          height={80}
          margin={5}
          radius={4}
          width={10}
        />
      </div>
    );
  }

  return (
    <>
      <h1 className="cocktail-title">{strDrink}</h1>
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="cocktail-details">
          <div class="drink-info">
            <p>
              <span class="drink-data">name :</span> {strDrink}
            </p>
            <p>
              <span class="drink-data">category :</span> {strCategory}
            </p>
            <p>
              <span class="drink-data">info :</span> {strAlcoholic}
            </p>
            <p>
              <span class="drink-data">glass :</span> {strGlass}
            </p>
            <p>
              <span class="drink-data">instructons :</span> {strInstructions}
            </p>
            <p>
              <span class="drink-data">ingredients :</span>
              {strIngredient1 ? <span> {strIngredient1},</span> : <></>}
              {strIngredient2 ? <span> {strIngredient2},</span> : <></>}
              {strIngredient3 ? <span> {strIngredient3},</span> : <></>}
              {strIngredient4 ? <span> {strIngredient4},</span> : <></>}
              {strIngredient5 ? <span> {strIngredient5}</span> : <></>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCocktail;
