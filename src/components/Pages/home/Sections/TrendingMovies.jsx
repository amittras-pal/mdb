import React from "react";
import { usePopularMovies } from "../../../../hooks/query.hooks";
import Loader from "../../../Shared/Loader/Loader";
import MediaTile from "../../../Shared/MediaTile/MediaTile";
import ExploreBtn from "../ExploreBtn";

function TrendingMovies() {
  const { isLoading, data } = usePopularMovies();
  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center mb-3">
        <p className="fw-bold text-warning mb-0">Trending Movies</p>
        <ExploreBtn linkTo="movie" />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-section">
          {data.data.results.map((movie) => (
            <MediaTile type="movie" data={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TrendingMovies;
