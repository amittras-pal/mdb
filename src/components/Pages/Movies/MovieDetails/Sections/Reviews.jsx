import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "../../../../Shared/Modal/Modal";
import ReviewCard from "../../../../Shared/Review/ReviewCard";
import {
  BASE_REVIEW_COUNT,
  NO_REVIEW_MSG,
} from "../../../../../constants/appConstants";

function Reviews({ movie }) {
  const [showAll, setShowAll] = useState(false);
  console.log(movie.reviews);
  return (
    <>
      <div className="reviews my-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold text-primary mb-0">Reviews</p>
          {movie.reviews.total_results > BASE_REVIEW_COUNT && (
            <button
              className="btn btn-sm text-warning"
              onClick={() => setShowAll(true)}>
              <span className="me-2">
                See All {movie.reviews.total_results}
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
        <div className="reviews__list">
          {movie.reviews.total_results ? (
            movie.reviews.results
              .slice(0, BASE_REVIEW_COUNT)
              .map((review) => <ReviewCard key={review.id} review={review} />)
          ) : (
            <p className="mb-0 small">{NO_REVIEW_MSG + movie.title}.</p>
          )}
        </div>
      </div>
      <ModalComponent
        show={showAll}
        onRequestHide={() => setShowAll(false)}
        title="Reviews">
        <p className="fw-bold">{movie.title}</p>
        {movie.reviews.results.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ModalComponent>
    </>
  );
}

export default Reviews;
