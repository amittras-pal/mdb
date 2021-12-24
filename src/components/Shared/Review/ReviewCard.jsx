import { DateTime } from "luxon";
import React, { useState } from "react";
import { REVIEW_CONTENT_LENGTH } from "../../../constants/appConstants";
import Image from "../Image/Image";
import "./ReviewCard.scss";

function ReviewCard({ review }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="card w-100 review-tile mb-3 border-0">
      <div className="card-header d-flex align-items-center">
        <div className="author-avatar">
          {review.author_details.avatar_path?.includes("http") ? (
            <img src={review.author_details.avatar_path?.substr(1)} alt="" />
          ) : (
            <Image
              size="w45"
              imageType="profile"
              imagePath={review.author_details.avatar_path}
            />
          )}
        </div>
        <div className="author-details">
          <p className="card-title fw-bold small text-warning mb-1">
            {review.author_details.name}
          </p>
          <p className="mb-0 review-date fst-italic">
            {DateTime.fromISO(review.created_at).toLocaleString(
              DateTime.DATETIME_MED
            )}
          </p>
        </div>
        {review.author_details.rating && (
          <div className="author-rating">
            <span className="fw-bold text-dark">
              {review.author_details.rating}
            </span>
          </div>
        )}
      </div>
      <div className="card-body">
        <p className="card-text small">
          <span>
            {showMore
              ? review.content
              : review.content.slice(0, REVIEW_CONTENT_LENGTH)}
            &nbsp;
          </span>
          {review.content.length > REVIEW_CONTENT_LENGTH && (
            <span
              className="text-warning text-decoration-underline pointer"
              onClick={() => setShowMore(!showMore)}>
              {showMore ? "...show less" : "...show the rest"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
