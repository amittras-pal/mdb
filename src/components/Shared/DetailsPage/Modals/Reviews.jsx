import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useReviews } from "../../../../hooks/query.hooks";
import Loader from "../../Loader/Loader";
import Pagination from "../../Pagination/Pagination";
import ReviewCard from "../../Review/ReviewCard";

function Reviews({ id, type, title, onClose }) {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    totalItems: 1,
    currentPage: 1,
  });

  const { data: reviews, isLoading } = useReviews(id, type, page);

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
          <p className="mb-0 small">{title}</p>
        </div>

        <button className="btn btn-sm text-primary" onClick={onClose}>
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

export default Reviews;
