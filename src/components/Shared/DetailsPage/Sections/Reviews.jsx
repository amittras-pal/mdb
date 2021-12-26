import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "../../Modal/Modal";
import ReviewCard from "../../Review/ReviewCard";
import {
  BASE_REVIEW_COUNT,
  NO_REVIEW_MSG,
} from "../../../../constants/appConstants";
import ReviewsModal from "../Modals/Reviews";

function Reviews({ data, type }) {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <div className="reviews mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold text-primary mb-0">Reviews</p>
          {data.reviews.total_results > BASE_REVIEW_COUNT && (
            <button
              className="btn btn-sm text-warning"
              onClick={() => setShowAll(true)}>
              <span className="me-2">See All {data.reviews.total_results}</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
        <div className="reviews__list">
          {data.reviews.total_results ? (
            data.reviews.results
              .slice(0, BASE_REVIEW_COUNT)
              .map((review) => <ReviewCard key={review.id} review={review} />)
          ) : (
            <p className="mb-0 small">
              {NO_REVIEW_MSG + (type === "movie" ? data.title : data.name)}.
            </p>
          )}
        </div>
      </div>
      <ModalComponent show={showAll} onRequestHide={() => setShowAll(false)}>
        <ReviewsModal
          id={data.id}
          title={type === "movie" ? data.title : data.name}
          type={type}
          onClose={() => setShowAll(false)}
        />
      </ModalComponent>
    </>
  );
}

export default Reviews;
