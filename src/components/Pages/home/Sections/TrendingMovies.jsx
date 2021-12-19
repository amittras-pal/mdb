import React from "react";
import { usePopularMovies } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import PosterTile from "../../../Shared/MediaTile/PosterTile";

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
            <PosterTile type="movie" data={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TrendingMovies;
