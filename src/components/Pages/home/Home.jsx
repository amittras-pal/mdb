import React from "react";
import intro from "../../../resources/images/intro.jpg";
import "./Home.scss";
import TrendingMovies from "./Sections/TrendingMovies";
import TrendingTvShows from "./Sections/TrendingTvShows";

function Home() {
  return (
    <div className="home">
      <div
        className="bg-light text-light px-3 py-4 hero-section"
        style={{ backgroundImage: `url(${intro})` }}>
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
        <p className="fw-bold text-danger">Popular TV Shows</p>
        <p className="text-dark">
          Section will contain a list Popular TV Shows
        </p>
        <p className="fw-bold text-danger">Top Rated TV Shows</p>
        <p className="text-dark">
          Section will contain a list of Top Rated TV Shows
        </p>
      </div>
    </div>
  );
}

export default Home;
