import React, { useEffect } from "react";
import Search from "./Search";
import { initialFetch } from "../fetchdata.js";
import { useContextHook } from "../Context/context";
import ScaleLoader from "react-spinners/ScaleLoader";
import Cocktail from "./Cocktail";

const Home = () => {
  const { state, dispatch } = useContextHook();

  useEffect(() => {
    initialFetch(dispatch);
  }, [dispatch]);

  // console.log(state);

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

  const cocktailsArr = state.cocktails.filter((prod) =>
    prod.strDrink.toLowerCase().includes(state.searchQuery)
  );

  return (
    <div className="home">
      <Search />
      <h3 className="title">Cocktails</h3>
      <div className="cocktails">
        {cocktailsArr.map((e, i) => (
          <Cocktail key={i} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Home;
