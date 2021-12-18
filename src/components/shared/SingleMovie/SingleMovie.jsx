// import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import React from "react";
import { movie } from "../../../constants/singleMovie";
import oblivionV from "../../../resources/images/oblivion-l.jpg";
import oblivion from "../../../resources/images/oblivion.jpg";
import "./SingleMovie.scss";

function SingleMovie() {
  console.log(movie);
  return (
    <div className="movie mb-4">
      <div className="movie__info">
        <div className="header">
          <img src={oblivionV} alt="" className="poster" />
          <div className="details">
            {/* <h4 className="fw-normal m-0">{movie.original_title}</h4> */}
            <h4 className="fw-normal m-0">
              The Chronicles of Narnia: The Lion, the Witch and the Wardrobe
            </h4>
            {/* <p className="m-0 basic-info flex-sm-column">
              <span className="fw-bold">
                {DateTime.fromISO(movie.release_date).toLocaleString(
                  DateTime.DATE_MED
                )}
              </span>
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </p> */}
          </div>
        </div>
      </div>
      <div
        className="backdrop"
        style={{ backgroundImage: `url(${oblivion})` }}
      />
    </div>
  );
}

export default SingleMovie;
