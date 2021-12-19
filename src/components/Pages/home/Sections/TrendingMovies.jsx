import React from "react";
import { usePopularMovies } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import MovieTile from "../../../Shared/Movie/MovieTile";

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
            <MovieTile movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TrendingMovies;
