import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PAGE_SIZE } from "../../../constants/appConstants";
import "./Pagination.scss";

function Pagination({
  totalPages = 1,
  totalItems = 0,
  currentPage = 1,
  onChange,
}) {
  return (
    <div className="isx-pagination">
      <>
        <button
          className="btn btn-sm text-light"
          onClick={() => onChange(currentPage - 1)}
          disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <p className="mb-0 fw-bold small text-muted isx-pagination__state">
          Showing{" "}
          <span className="text-secondary">
            {PAGE_SIZE * (currentPage - 1) + 1}
          </span>{" "}
          to{" "}
          <span className="text-secondary">
            {PAGE_SIZE * currentPage <= totalItems
              ? PAGE_SIZE * currentPage
              : totalItems}
          </span>{" "}
          of <span className="text-secondary">{totalItems}</span>
        </p>
        <button
          className="btn btn-sm text-light"
          onClick={() => onChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </>
    </div>
  );
}

export default Pagination;
