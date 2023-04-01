import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [opacity1, setOpacity1] = useState(0.6);
  const [opacity2, setOpacity2] = useState(0.6);
  const [opacity3, setOpacity3] = useState(0.6);
  const [opacity4, setOpacity4] = useState(0.6);
  const [opacity5, setOpacity5] = useState(0.6);

  return (
    <>
      <h1 className="category-heading">Categories</h1>{" "}
      <div className="categories">
        <div className="ordinary-drink category">
          <Link
            to={"cocktails/ordinary_drink"}
            className="link"
            onMouseOver={() => setOpacity1(1)}
            onMouseOut={() => setOpacity1(0.6)}
          >
            <img
              style={{ opacity: opacity1 }}
              src="https://ychef.files.bbci.co.uk/976x549/p0dmkvp1.jpg"
              className="category-img"
              alt=""
            />
            <h1>Ordinary Drink</h1>
          </Link>
        </div>
        <div className="Cocktail category">
          <Link
            to={"cocktails/cocktail"}
            className="link"
            onMouseOver={() => setOpacity2(1)}
            onMouseOut={() => setOpacity2(0.6)}
          >
            <img
              style={{ opacity: opacity2 }}
              src="https://thumbs.dreamstime.com/b/five-colorful-gin-tonic-cocktails-wine-glasses-bar-counter-pup-restaurant-111478962.jpg"
              className="category-img"
              alt=""
            />
            <h1>Cocktail</h1>
          </Link>
        </div>
        <div className="Shake category">
          <Link
            to={"cocktails/shake"}
            className="link"
            onMouseOver={() => setOpacity3(1)}
            onMouseOut={() => setOpacity3(0.6)}
          >
            <img
              style={{ opacity: opacity3 }}
              src="https://blogscdn.thehut.net/wp-content/uploads/sites/478/2016/04/05105624/choco-malt-shake-1024x683.jpg"
              className="category-img"
              alt=""
            />
            <h1>Shakes</h1>
          </Link>
        </div>
        <div className="Beer category">
          <Link
            to={"cocktails/beer"}
            className="link"
            onMouseOver={() => setOpacity4(1)}
            onMouseOut={() => setOpacity4(0.6)}
          >
            <img
              style={{ opacity: opacity4 }}
              src="https://media.istockphoto.com/id/576563434/photo/bottles-of-assorted-global-beer-brands.jpg?s=170667a&w=0&k=20&c=DTs1AymVraFUD2p8jYzstX_QYPoHGu6RuGi1T3kcUzg="
              className="category-img"
              alt=""
            />
            <h1>Beer</h1>
          </Link>
        </div>
        <div className="soft-drink category">
          <Link
            to={"cocktails/soft_drink"}
            className="link"
            onMouseOver={() => setOpacity5(1)}
            onMouseOut={() => setOpacity5(0.6)}
          >
            <img
              style={{ opacity: opacity5 }}
              src="https://www.foodbeverageinsider.com/sites/foodbeverageinsider.com/files/FBI%20carbonated%20soft%20drinks.jpg"
              className="category-img"
              alt=""
            />
            <h1>Soft Drinks </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;
