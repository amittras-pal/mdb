import React from "react";
import { usePopularTvShows } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import MediaTile from "../../../Shared/MediaTile/MediaTile";
import ExploreBtn from "../ExploreBtn";

function TrendingTvShows() {
  const { isLoading, data } = usePopularTvShows();
  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center mb-3">
        <p className="fw-bold text-danger mb-0">Trending TV Shows</p>
        <ExploreBtn linkTo="movies" />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-section">
          {data.data.results.map((show) => (
            <MediaTile type="show" data={show} key={show.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TrendingTvShows;
