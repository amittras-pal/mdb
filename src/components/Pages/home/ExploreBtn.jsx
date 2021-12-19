import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function ExploreBtn({ linkTo }) {
  return (
    <Link to={linkTo} className="explore-more-btn">
      View All
      <FontAwesomeIcon icon={faChevronRight} className="ms-3" />
    </Link>
  );
}

export default ExploreBtn;
