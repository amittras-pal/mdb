import React from "react";
import MediaTile from "../../../Shared/MediaTile/MediaTile";

function Recommendations({ movie }) {
  return (
    <div className="recommendations">
      <div className="d-flex justify-content-between mb-3 slign-items-center">
        <p className="fw-bold text-primary mb-0">Recommendations</p>
      </div>
      <div className="recommendations-scroll">
        {movie.recommendations.results.map((rec) => (
          <MediaTile type="movie" data={rec} key={rec.id} />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
