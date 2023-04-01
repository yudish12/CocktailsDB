import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByCategory } from "../fetchdata";
import { useContextHook } from "../Context/context";
import ScaleLoader from "react-spinners/ScaleLoader";
import Cocktail from "./Cocktail";
import Pagination from "./Pagination";

const CacktailCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const { state, dispatch } = useContextHook();

  const { category } = useParams();

  useEffect(() => {
    getByCategory(dispatch, category);
  }, [dispatch, category]);

  console.log(state);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.cocktails.slice(indexOfFirstPost, indexOfLastPost);

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
    <div className="home">
      <h3 className="title">Results</h3>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.floor(state.cocktails.length / postsPerPage)}
        setCurrentPage={setCurrentPage}
      />
      <div className="cocktails">
        {currentPosts.map((e) => (
          <Cocktail {...e} />
        ))}
      </div>
    </div>
  );
};

export default CacktailCategory;
