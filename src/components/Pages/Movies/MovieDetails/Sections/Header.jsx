import React from "react";
import { Tooltip } from "react-tippy";
import { useApiConfiguration } from "../../../../../hooks/query.hooks";

function Header({ movie }) {
  const { data: configData } = useApiConfiguration();
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${configData?.data.images.secure_base_url}original${movie.backdrop_path})`,
      }}>
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
            }>
            <span className="text-light mb-0 small fw-bold">
              {movie.vote_average}
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Header;
