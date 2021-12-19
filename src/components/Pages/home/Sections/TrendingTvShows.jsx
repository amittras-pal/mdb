import React from "react";
import { usePopularTvShows } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import TvShowTile from "../../../Shared/TvShow/TvShowTile";

function TrendingTvShows() {
  const { isLoading, data, isFetching } = usePopularTvShows();
  console.log({ isLoading, isFetching });
  return (
    <>
      <p className="fw-bold text-danger">Trending TV Shows</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-section">
          {data.data.results.map((show) => (
            <TvShowTile show={show} key={show.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TrendingTvShows;
