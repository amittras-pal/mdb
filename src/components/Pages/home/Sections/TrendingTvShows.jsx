import React from "react";
import { usePopularTvShows } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import MediaTile from "../../../Shared/MediaTile/MediaTile";
import ExploreBtn from "../ExploreBtn";

function TrendingTvShows() {
  const { isLoading, data } = usePopularTvShows();
  return (
    <>
      <p className="fw-bold text-danger">Trending TV Shows</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-section">
          {data.data.results.map((show) => (
            <MediaTile type="show" data={show} key={show.id} />
          ))}
          <ExploreBtn linkTo="tv" />
        </div>
      )}
    </>
  );
}

export default TrendingTvShows;
