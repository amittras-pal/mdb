import React from "react";
import { usePopularMovies } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import MediaTile from "../../../Shared/MediaTile/MediaTile";
import ExploreBtn from "../ExploreBtn";

function TrendingMovies() {
  const { isLoading, data } = usePopularMovies();
  return (
    <>
      <p className="fw-bold text-danger">Trending Movies</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-section">
          {data.data.results.map((movie) => (
            <MediaTile type="movie" data={movie} key={movie.id} />
          ))}
          <ExploreBtn linkTo="movies" />
        </div>
      )}
    </>
  );
}

export default TrendingMovies;
