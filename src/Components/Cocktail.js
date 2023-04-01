import React from "react";
import { useNavigate } from "react-router-dom";

const Cocktail = ({ idDrink, strDrink, strDrinkThumb }) => {
  const navigate = useNavigate();

  return (
    <div className="cocktail-card">
      <img src={strDrinkThumb} alt={strDrink} />
      <h1>{strDrink}</h1>
      <button className="btn" onClick={() => navigate(`/cocktail/${idDrink}`)}>
        Details
      </button>
    </div>
  );
};

export default Cocktail;
