import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function InfoAside({ movie }) {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className="social-links d-flex my-3">
        {movie.homepage && (
          <a
            href={movie.homepage}
            target="_blank"
            className="btn btn-sm btn-secondary"
            title="Visit Homepage"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        )}
      </div>
      <div className="info mb-3">
        {movie.status && (
          <>
            <p className="mb-1 fw-bold text-muted">Status</p>
            <p className="small fw-bold">{movie.status}</p>
          </>
        )}
        {movie.runtime > 0 && (
          <>
            <p className="mb-1 fw-bold text-muted">Runtime</p>
            <p className="small fw-bold">
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m{" "}
            </p>
          </>
        )}
        {movie.budget > 0 && (
          <>
            <p className="mb-1 fw-bold text-muted">Budget</p>
            <p className="small fw-bold">
              {currencyFormat.format(movie.budget)}
            </p>
          </>
        )}
        {movie.revenue > 0 && (
          <>
            <p className="mb-1 fw-bold text-muted">Revenue</p>
            <p className="small fw-bold">
              {currencyFormat.format(movie.revenue)}
            </p>
          </>
        )}
        {movie.keywords?.keywords?.length > 0 && (
          <>
            <p className="mb-1 fw-bold text-muted">Keywords</p>
            <div className="keywords small fw-bold">
              {movie.keywords.keywords.map((kw) => (
                <span className="me-2 keyword small" key={kw.id}>
                  {kw.name}
                </span>
              ))}
            </div>
          </>
        )}
        {/* Director, Producer, Writer, Status, Language, Budget, Revenue, Keywords */}
      </div>
    </>
  );
}

export default InfoAside;
