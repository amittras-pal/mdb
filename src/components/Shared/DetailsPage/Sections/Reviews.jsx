import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  BASE_REVIEW_COUNT,
  NO_REVIEW_MSG,
} from "../../../../constants/appConstants";
import { setDocTitle } from "../../../../utils/utils";
import ModalComponent from "../../Modal/Modal";
import ReviewCard from "../../Review/ReviewCard";
import ReviewsModal from "../Modals/Reviews";

function Reviews({ data, type }) {
  const titleString = type === "movie" ? data.title : data.name;

  const [modalParams, setModalParams] = useSearchParams();
  const navigate = useNavigate();

  const openAllReviews = () => {
    setModalParams({ reviews: true });
    setDocTitle(`${type.toUpperCase()} ${titleString} - reviews`);
  };

  const closeAllReviews = () => {
    navigate(-1);
    setDocTitle(`${type.toUpperCase()} ${titleString}`);
  };

  return (
    <>
      <div className="reviews mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold text-primary mb-0">Reviews</p>
          {data.reviews.total_results > BASE_REVIEW_COUNT && (
            <button
              className="btn btn-sm text-warning"
              onClick={openAllReviews}>
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
            <p className="mb-0 small">{NO_REVIEW_MSG + titleString}.</p>
          )}
        </div>
      </div>
      <ModalComponent
        show={modalParams.get("reviews") ? true : false}
        onRequestHide={closeAllReviews}>
        <ReviewsModal
          id={data.id}
          title={titleString}
          type={type}
          onClose={closeAllReviews}
        />
      </ModalComponent>
    </>
  );
}

export default Reviews;
