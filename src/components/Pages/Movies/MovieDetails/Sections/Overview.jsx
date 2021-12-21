import { DateTime } from "luxon";
import React from "react";

function Overview({ movie }) {
  const findDirectors = (crew) => {
    return crew.filter((member) => member.job === "Director");
  };

  return (
    <div className="overview my-3">
      <p className="text-danger fw-bold">Overview: </p>
      <div className="section-content">
        <p>{movie.overview}</p>
        <div className="movie-basics">
          <p className="mb-2 small">
            <span className="fw-bold">Original Title: </span>
            {movie.original_title}
          </p>
          <p className="mb-2 small">
            <span className="fw-bold">Original Language: </span>
            {movie.original_language.toUpperCase()}
          </p>
          <p className="mb-2 small">
            <span className="fw-bold">Released: </span>
            {DateTime.fromISO(movie.release_date).toLocaleString(
              DateTime.DATE_MED
            )}
          </p>
          <p className="mb-2 small d-flex flex-wrap">
            <span className="fw-bold">Genre(s):&nbsp;</span>
            {movie.genres.map((genre, i, { length }) => (
              <span className="me-1" key={genre.id}>
                {genre.name}
                {length - 1 !== i ? "," : ""}
              </span>
            ))}
          </p>
          <p className="mb-2 small d-flex flex-wrap">
            <span className="fw-bold">Director(s):&nbsp;</span>
            {findDirectors(movie.credits.crew).map((dir, i, { length }) => (
              <span className="me-1" key={dir.id}>
                {dir.name}
                {length - 1 !== i ? "," : ""}
              </span>
            ))}
            <span className="fst-italic text-danger">
              (See All{" "}
              <span className="fw-bold">{movie.credits.crew.length}</span> crew
              members)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
