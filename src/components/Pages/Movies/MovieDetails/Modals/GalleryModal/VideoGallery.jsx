import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function VideoGallery({ videoList, title, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="modal-header">
        <div className="modal-title">
          <p className="mb-0 small fw-bold">VIDEOS</p>
          <p className="mb-0 small">{title}</p>
        </div>
        <button className="btn btn-sm text-primary d-md-none" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="modal-body p-0 video-gallery">
        <iframe
          width="100%"
          height="70%"
          src={`https://www.youtube.com/embed/${videoList[currentIndex].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="modal-footer d-flex justify-content-between align-items-center">
        <button
          className="btn btn-sm text-secondary shaadow"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <p className="mb-0 small fw-bold">
          {currentIndex + 1} <span className="text-muted">of</span>{" "}
          {videoList.length}
        </p>
        <button
          className="btn btn-sm text-secondary shaadow"
          disabled={currentIndex === videoList.length - 1}
          onClick={() => setCurrentIndex(currentIndex + 1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}

export default VideoGallery;
