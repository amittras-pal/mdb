import { DateTime } from "luxon";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import "./MediaTile.scss";

function MediaTile({ type, data }) {
  const route = `/${type === "movie" ? "movies" : "tv"}/view/${data.id}`;

  return (
    <div className="media-tile">
      <div className="poster">
        <Link to={route} className="media-link">
          <Image size="w185" imageType="poster" imagePath={data.poster_path} />
        </Link>
      </div>
      <div className="content mt-2">
        <Link to={route} className="fw-bold text-decoration-none label-link">
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
