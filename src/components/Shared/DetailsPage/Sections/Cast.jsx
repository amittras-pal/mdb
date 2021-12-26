import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfileTile from "../../ProfileTile/ProfileTile";

function Cast({ type, data }) {
  return (
    <div className="cast mb-3">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="fw-bold text-primary mb-0">Top Cast</p>
        <button className="btn btn-sm text-warning">
          <span className="me-2">See All</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="cast-scroll">
        {data.credits.cast.slice(0, 10).map((member) => (
          <ProfileTile profile={member} showCharacter={true} key={member.id} />
        ))}
      </div>
    </div>
  );
}

export default Cast;
