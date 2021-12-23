import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfileTile from "../../../../Shared/ProfileTile/ProfileTile";

function Cast({ movie }) {
  return (
    <div className="cast-block">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="fw-bold text-primary mb-0">Cast</p>
        <button className="btn btn-sm text-warning pe-0">
          <span className="me-2">See All {movie.credits.cast.length}</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="cast-crew">
        {movie.credits.cast.slice(0, 10).map((member) => (
          <ProfileTile profile={member} showCharacter={true} key={member.id} />
        ))}
      </div>
    </div>
  );
}

export default Cast;
