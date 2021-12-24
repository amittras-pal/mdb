import {
  faChevronLeft,
  faChevronRight,
  faDownload,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useApiConfiguration } from "../../../../../../hooks/query.hooks";
import { createImageUrl, downloadImage } from "../../../../../../utils/utils";
import "./ImageGallery.scss";

function ImageGallery({ imageList = [], galleryType, onClose, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: config } = useApiConfiguration();

  const download = () => {
    downloadImage(
      createImageUrl(
        "original",
        galleryType,
        config,
        imageList[currentIndex].file_path
      ),
      imageList[currentIndex].file_path.substr(1)
    );
  };

  return (
    <>
      <div className="modal-header">
        <div className="modal-title">
          <p className="mb-0 small fw-bold">{galleryType.toUpperCase()}S</p>
          <p className="mb-0 small">{title}</p>
        </div>
        <button className="btn text-secondary mx-2" onClick={download}>
          <FontAwesomeIcon icon={faDownload} />
        </button>
        <button className="btn btn-sm text-primary d-md-none" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div
        className="modal-body p-3 image-gallery"
        style={{
          backgroundImage: `url(${createImageUrl(
            "original",
            galleryType,
            config,
            imageList[currentIndex].file_path
          )})`,
        }}></div>
      <div className="modal-footer d-flex justify-content-between align-items-center">
        <button
          className="btn btn-sm text-light"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <p className="mb-0 small fw-bold">
          {currentIndex + 1} <span className="text-muted">of</span>{" "}
          {imageList.length}
        </p>
        <button
          className="btn btn-sm text-light"
          disabled={currentIndex === imageList.length - 1}
          onClick={() => setCurrentIndex(currentIndex + 1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}

export default ImageGallery;
