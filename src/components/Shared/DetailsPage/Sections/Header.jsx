import React from "react";
import { Tooltip } from "react-tippy";
import { useApiConfiguration } from "../../../../hooks/query.hooks";

function Header({ type, data }) {
  const { data: configData } = useApiConfiguration();
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${configData?.data.images.secure_base_url}original${data.backdrop_path})`,
      }}>
      <div className="overlay"></div>
      <div className="content align-items-md-end">
        <div className="poster">
          <img
            src={`${configData?.data.images.secure_base_url}w342${data.poster_path}`}
            alt={`${data.title} poster`}
          />
        </div>
        <div className="title-area">
          <div className="title">
            <p className="h3 text-secondary">
              {type === "movie" ? data.title : data.name}
            </p>
            <p className="h5 fw-normal text-secondary fst-italic small">
              {data.tagline}
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
                Based on <span className="fw-bold">{data.vote_count}</span>{" "}
                votes!
              </p>
            }>
            <span className="text-secondary mb-0 small fw-bold">
              {data.vote_average}
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Header;
