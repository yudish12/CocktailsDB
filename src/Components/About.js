import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-container">About Us</h1>
      <ul className="about-content">
        <li>
          This is an project made to demonstrate how we can use context API with
          use Reducer Hook with handling third party API's
        </li>
        <li>
          I have used coktails api -{" "}
          <Link to={"https://www.thecocktaildb.com/api.php"}>- Click Here</Link>
          to fetch data for each cocktail and also implemented instant search
          functionality where on typing we will see relevant results
        </li>
        <li>Made By yudish_ch ✌️</li>
      </ul>
    </div>
  );
};

export default About;
