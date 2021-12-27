import { DateTime } from "luxon";
import React from "react";

function Overview({ show }) {
  return (
    <div className="overview mb-3">
      <div className="d-md-none mb-3">
        <p className="h2 fw-normal">{show.name}</p>
        <p className="h5 fw-normal fst-italic small">{show.tagline}</p>
      </div>
      <p className="text-primary fw-bold mb-3">Overview</p>
      <div className="overview-content">
        <p>{show.overview}</p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">Original Title: </span>
          {show.original_name}
        </p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">Original Language: </span>
          {show.original_language.toUpperCase()}
        </p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">Last Episode Aired: </span>
          {DateTime.fromISO(show.last_air_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">Status: </span>
          {show.status}
        </p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">No. of Seasons: </span>
          {show.number_of_seasons}
        </p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">No. of Episodes: </span>
          {show.number_of_episodes}
        </p>
        <p className="mb-2 small d-flex flex-wrap">
          <span className="fw-bold text-muted">Created By:&nbsp;</span>
          {show.created_by.map((creator, i, { length }) => (
            <span className="me-1" key={creator.id}>
              {creator.name}
              {length - 1 !== i ? "," : ""}
            </span>
          ))}
        </p>
        <p className="mb-2 small d-flex flex-wrap">
          <span className="fw-bold text-muted">Genre(s):&nbsp;</span>
          {show.genres.map((genre, i, { length }) => (
            <span className="me-1" key={genre.id}>
              {genre.name}
              {length - 1 !== i ? "," : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Overview;
