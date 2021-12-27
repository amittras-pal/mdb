import { DateTime } from "luxon";
import React from "react";

function Overview({ movie }) {
  const findDirectors = (crew) => {
    return crew.filter((member) => member.job === "Director");
  };

  return (
    <div className="overview mb-3">
      <div className="d-md-none mb-3">
        <p className="h2 fw-normal">{movie.title}</p>
        <p className="h5 fw-normal fst-italic small">{movie.tagline}</p>
      </div>
      <p className="text-primary fw-bold mb-3">Overview </p>
      <div className="overview-content">
        <p>{movie.overview}</p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">Original Title: </span>
          {movie.original_title}
        </p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">Original Language: </span>
          {movie.original_language.toUpperCase()}
        </p>
        <p className="mb-2 small">
          <span className="fw-bold text-muted">Released: </span>
          {DateTime.fromISO(movie.release_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </p>
        <p className="mb-2 small d-flex flex-wrap">
          <span className="fw-bold text-muted">Genre(s):&nbsp;</span>
          {movie.genres.map((genre, i, { length }) => (
            <span className="me-1" key={genre.id}>
              {genre.name}
              {length - 1 !== i ? "," : ""}
            </span>
          ))}
        </p>
        <p className="mb-2 small d-flex flex-wrap">
          <span className="fw-bold text-muted">Director(s):&nbsp;</span>
          {findDirectors(movie.credits.crew).map((dir, i, { length }) => (
            <span className="me-1" key={dir.id}>
              {dir.name}
              {length - 1 !== i ? "," : ""}
            </span>
          ))}
          <span className="fst-italic text-warning">
            (<span className="fw-bold">{movie.credits.crew.length}</span> crew
            members)
          </span>
        </p>
      </div>
    </div>
  );
}

export default Overview;
