import React from "react";
import MediaTile from "../../MediaTile/MediaTile";

function Recommendations({ data, type }) {
  return (
    <div className="recommendations mb-3">
      <div className="d-flex justify-content-between mb-3 slign-items-center">
        <p className="fw-bold text-primary mb-0">Recommendations</p>
      </div>
      <div className="recommendations-scroll">
        {data.recommendations.results.map((rec) => (
          <MediaTile type={type} data={rec} key={rec.id} />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
