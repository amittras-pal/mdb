import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "./MediaTile.scss";
import { useApiConfiguration } from "../../../services/hooks/queryHooks";

function MediaTile({ type, data }) {
  const { data: configData } = useApiConfiguration();

  return (
    <div className="media-tile">
      <div className="poster">
        <Link
          to={`/${type === "movie" ? "movies" : "tv"}/view/${data.id}`}
          className="media-link">
          <img
            src={`${configData?.data.images.secure_base_url}/w185${data.poster_path}`}
            alt={`${type === "movie" ? data.title : data.name} poster`}
          />
        </Link>
      </div>
      <div className="content mt-2">
        <Link
          to={`/${type === "movie" ? "movies" : "tv"}/view/${data.id}`}
          className="fw-bold text-decoration-none label-link">
          {type === "movie" ? data.title : data.name}
        </Link>
        <p className="text-muted small mb-0">
          {type === "movie" ? "Released: " : "First Aired: "}
          {DateTime.fromISO(
            type === "movie" ? data.release_date : data.first_air_date
          ).toLocaleString(DateTime.DATE_MED)}
        </p>
      </div>
    </div>
  );
}

export default MediaTile;
