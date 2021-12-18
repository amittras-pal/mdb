import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home row m-0 pt-3">
      <p className="fw-bold text-danger">Popular Movies</p>
      <p className="text-dark">
        Section will contain a list of Currently Popular Movies
      </p>
      <p className="fw-bold text-danger">Top Rated Movies</p>
      <p className="text-dark">
        Section will contain a list of Top rated Movies
      </p>
      <p className="fw-bold text-danger">Popular TV Shows</p>
      <p className="text-dark">Section will contain a list Popular TV Shows</p>
      <p className="fw-bold text-danger">Top Rated TV Shows</p>
      <p className="text-dark">
        Section will contain a list of Top Rated TV Shows
      </p>
    </div>
  );
}

export default Home;
