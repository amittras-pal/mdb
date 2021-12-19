import { DateTime } from "luxon";
import React from "react";
import { Link } from "react-router-dom";
import "./TvShowTile.scss";
import { useApiConfiguration } from "../../../services/hooks/queryHooks";

function TvShowTile({ show }) {
  const { data: configData } = useApiConfiguration();
  return (
    <div className="tv-tile">
      <div className="poster">
        <Link to={`/tv/view/${show.id}`} className="tv-link">
          <img
            src={`${configData?.data.images.secure_base_url}/w185${show.poster_path}`}
            alt={`${show.name} poster`}
          />
        </Link>
      </div>
      <div className="content mt-2">
        <Link
          to={`/tv/view/${show.id}`}
          className="fw-bold text-secondary text-decoration-none">
          {show.name}
        </Link>
        <p className="text-muted small mb-0">
          First Aired:{" "}
          {DateTime.fromISO(show.first_air_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </p>
      </div>
    </div>
  );
}

export default TvShowTile;
