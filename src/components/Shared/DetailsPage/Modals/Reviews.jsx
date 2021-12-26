import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useMovieReviews } from "../../../../hooks/query.hooks";
import Pagination from "../../Pagination/Pagination";
import Loader from "../../Loader/Loader";
import ReviewCard from "../../Review/ReviewCard";

function ReviewsModal({ movieId, movieTitle, onClose }) {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    totalItems: 1,
    currentPage: 1,
  });

  const { data: reviews, isLoading } = useMovieReviews(movieId, page);

  useEffect(() => {
    if (reviews)
      setPagination({
        totalPages: reviews?.data.total_pages,
        totalItems: reviews?.data.total_results,
        currentPage: reviews?.data.page,
      });
  }, [reviews]);

  return (
    <>
      <div className="modal-header">
        <div className="modal-title">
          <p className="mb-0 small fw-bold">REVIEWS</p>
          <p className="mb-0 small">{movieTitle}</p>
        </div>

        <button className="btn btn-sm text-primary d-md-none" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="modal-body">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {reviews?.data?.results.map((review) => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </>
        )}
      </div>
      <div className="modal-footer">
        <Pagination {...pagination} onChange={setPage} />
      </div>
    </>
  );
}

export default ReviewsModal;
