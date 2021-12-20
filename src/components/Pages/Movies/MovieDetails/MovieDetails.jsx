import { faChevronRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tippy";
import tmdbLogo from "../../../../resources/images/tmdb-logo.svg";
import {
  useApiConfiguration,
  useMovieById,
} from "../../../../services/hooks/queryHooks";
import { setDocTitle } from "../../../../utils/utils";
import Loader from "../../../Shared/Loader/Loader";
import ProfileTile from "../../../Shared/ProfileTile/ProfileTile";
// import { endGame as movie } from "./movie";
import "./MovieDetails.scss";

function MovieDetails() {
  const { id: movieId } = useParams();
  const { data: configData } = useApiConfiguration();
  const [mediaView, setMediaView] = useState("videos");

  const { data, isLoading } = useMovieById(movieId);
  // console.log(data?.data);
  // ${configData?.data.images.secure_base_url}w342${movie.poster_path}

  const movie = data?.data;

  const findDirector = (crew) => {
    return crew.filter((member) => member.job === "Director");
  };

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (isLoading)
    return (
      <div className="loading d-flex justify-content-center align-items-center w-100 h-100">
        <Loader />
      </div>
    );

  if (movie) setDocTitle(`[MOVIE] ${movie.title}`);

  return (
    <div className="movie-details">
      <div
        className="header"
        style={{
          backgroundImage: `url(${configData?.data.images.secure_base_url}original${movie.backdrop_path})`,
        }}
      >
        <div className="overlay"></div>
        <div className="content align-items-md-end">
          <div className="poster">
            <img
              src={`${configData?.data.images.secure_base_url}w342${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </div>
          <div className="title-area">
            <div className="title">
              <p className="h3 text-light">{movie.title}</p>
              <p className="h5 fw-normal text-light fst-italic small">
                {movie.tagline}
              </p>
            </div>

            <Tooltip
              trigger="click"
              position="top"
              className="rating pointer"
              theme="light"
              arrow={true}
              html={
                <p className="mb-0">
                  Based on <span className="fw-bold">{movie.vote_count}</span>{" "}
                  votes!
                </p>
              }
            >
              <span className="text-light mb-0 small fw-bold">
                {movie.vote_average}
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="row m-0 mt-3">
          <div className="col-md-9">
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
                      <span className="me-2" key={genre.id}>
                        {genre.name}
                        {length - 1 !== i ? "," : ""}
                      </span>
                    ))}
                  </p>
                  <p className="mb-2 small d-flex flex-wrap">
                    <span className="fw-bold">Director(s):&nbsp;</span>
                    {findDirector(movie.credits.crew).map(
                      (dir, i, { length }) => (
                        <span className="me-2" key={dir.id}>
                          {dir.name}
                          {length - 1 !== i ? "," : ""}
                        </span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="cast-block">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="fw-bold text-danger mb-0">Cast</p>
                <button className="btn btn-sm pe-0">
                  <span className="me-2">
                    See All {movie.credits.cast.length}
                  </span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="cast-crew">
                {movie.credits.cast.slice(0, 10).map((member) => (
                  <ProfileTile
                    profile={member}
                    showCharacter={true}
                    key={member.id}
                  />
                ))}
              </div>
            </div>
            <div className="media my-3">
              <div className="media__header">
                <span className="mb-0 fw-bold text-danger me-3">Media</span>

                <div className="tabs">
                  <button
                    className={
                      mediaView === "videos"
                        ? "media__header__tab active"
                        : "media__header__tab"
                    }
                    onClick={() => setMediaView("videos")}
                  >
                    Videos ({movie.videos?.results.length})
                  </button>
                  <button
                    className={
                      mediaView === "backdrops"
                        ? "media__header__tab active"
                        : "media__header__tab"
                    }
                    onClick={() => setMediaView("backdrops")}
                  >
                    Backdrops ({movie.images?.backdrops.length})
                  </button>
                  <button
                    className={
                      mediaView === "posters"
                        ? "media__header__tab active"
                        : "media__header__tab"
                    }
                    onClick={() => setMediaView("posters")}
                  >
                    Posters ({movie.images?.posters.length})
                  </button>
                </div>
              </div>
              <div className="media__content py-3">
                {mediaView === "videos" && (
                  <div className="media__videos">
                    <h2>Showing Videos</h2>
                  </div>
                )}
                {mediaView === "backdrops" && (
                  <div className="media__backdrops">
                    <h2>Showing Backdrops</h2>
                  </div>
                )}
                {mediaView === "posters" && (
                  <div className="media__posters">
                    <h2>Showing Posters</h2>
                  </div>
                )}
              </div>
            </div>
            <div className="reviews"></div>
            <div className="recommendations"></div>
          </div>
          <div className="col-md-3 right-bar">
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
              {/* Add null checks for all of these.  */}
              <p className="mb-1 fw-bold">Status</p>
              <p className="small fw-bold text-danger">{movie.status}</p>
              <p className="mb-1 fw-bold">Runtime</p>
              <p className="small fw-bold text-danger">
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m{" "}
              </p>
              <p className="mb-1 fw-bold">Budget</p>
              <p className="small fw-bold text-danger">
                {currencyFormat.format(movie.budget)}
              </p>
              <p className="mb-1 fw-bold">Revenue</p>
              <p className="small fw-bold text-danger">
                {currencyFormat.format(movie.revenue)}
              </p>
              <p className="mb-1 fw-bold">Keywords</p>
              <div className="keywords small text-danger fw-bold">
                {movie.keywords.keywords.map((kw) => (
                  <span className="me-2 keyword small" key={kw.id}>
                    {kw.name}
                  </span>
                ))}
              </div>
              {/* Director, Producer, Writer, Status, Language, Budget, Revenue, Keywords */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer bg-danger text-light d-flex justify-content-center align-items-center p-2"
        style={{ gap: "1.25rem" }}
      >
        <p className="m-0 small">
          This program uses community curated data provided by{" "}
          <span className="fw-bold">TMDB (themoviedb.org) </span> API. This
          program is in no way endorsed by TMDb or its associates.
        </p>
        <img src={tmdbLogo} alt="TMDB Logo" width={100} />
      </div>
    </div>
  );
}

export default MovieDetails;
