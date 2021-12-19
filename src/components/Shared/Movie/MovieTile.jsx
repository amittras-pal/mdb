import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "./MovieTile.scss";
import { useApiConfiguration } from "../../../services/hooks/queryHooks";

function MovieTile({ movie }) {
  const { data: configData } = useApiConfiguration();
  return (
    <div className="movie-tile">
      <div className="poster">
        <Link to={`/movies/view${movie.id}`} className="movie-link">
          <img
            src={`${configData?.data.images.secure_base_url}/w185${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </Link>
      </div>
      <div className="content mt-2">
        <Link
          to={`/movies/view${movie.id}`}
          className="fw-bold text-secondary text-decoration-none">
          {movie.title}
        </Link>
        <p className="text-muted small mb-0">
          Released:{" "}
          {DateTime.fromISO(movie.release_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </p>
      </div>
    </div>
  );
}

export default MovieTile;
