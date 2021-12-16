import React from "react";
import "./MovieTile.scss";
import imdb from "../../../resources/images/imdb.png";

function MovieTile({ movie }) {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={movie.image} alt="John Wick: Chapter 3" />
      </div>
      <div className="movie__details">
        <div className="movie__details__name">
          <span>{movie.title}</span>
        </div>
        <div className="movie__details__year">{movie.year}</div>
        <div className="movie__details__genre">
          <span>{movie.genres}</span>
        </div>
        <div className="movie__details__rating">
          <img src={imdb} alt="" />
          <span>{movie.imdbRating} / 10</span>
        </div>
      </div>
    </div>
  );
}

export default MovieTile;
