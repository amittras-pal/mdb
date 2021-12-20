import React from "react";
import intro from "../../../resources/images/intro.jpg";
import { setDocTitle } from "../../../utils/utils";
import "./Home.scss";
import TrendingMovies from "./Sections/TrendingMovies";
import TrendingPeople from "./Sections/TrendingPeople";
import TrendingTvShows from "./Sections/TrendingTvShows";

function Home() {
  setDocTitle("");
  return (
    <div className="home">
      <div
        className="bg-light text-light px-3 py-4 hero-section"
        style={{ backgroundImage: `url(${intro})` }}
      >
        <div className="overlay"></div>
        <div className="content">
          <h2 className="fst-italic">
            Welcome to <span className="fw-bold">IntelliShows.</span>
          </h2>
          <p>
            Millions of movies, TV shows and people to discover.{" "}
            <span className="fw-bold">Explore now!</span>
          </p>
        </div>
      </div>
      <div className="home-body px-2 py-3">
        <TrendingMovies />
        <TrendingTvShows />
        <TrendingPeople />
      </div>
    </div>
  );
}

export default Home;
