import {
  faChevronLeft,
  faChevronRight,
  faCloudDownloadAlt,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tippy";
import { useApiConfiguration } from "../../../../hooks/query.hooks";
import { createImageUrl, downloadImage } from "../../../../utils/utils";
import Loader from "../../Loader/Loader";
import "../DetailsPage.scss";

function ImageGallery({ imageList, galleryType, onClose, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImage, setLoadedImage] = useState(null);

  const { data: config } = useApiConfiguration();

  useEffect(() => {
    setLoadedImage(null);
    const imgUrl = createImageUrl(
      "original",
      galleryType,
      config,
      imageList?.[currentIndex].file_path
    );
    if (imgUrl) {
      fetch(imgUrl)
        .then((data) => data.blob())
        .then((src) => {
          const localUrl = URL.createObjectURL(src);
          setLoadedImage(`url(${localUrl})`);
        });
    }
  }, [currentIndex, config, galleryType, imageList]);

  const download = () => {
    downloadImage(
      createImageUrl(
        "original",
        galleryType,
        config,
        imageList?.[currentIndex].file_path
      ),
      imageList?.[currentIndex].file_path.substr(1)
    );
  };

  return (
    <>
      <div className="modal-header">
        <div className="modal-title">
          <p className="mb-0 small fw-bold">{galleryType.toUpperCase()}S</p>
          <p className="mb-0 small">{title}</p>
        </div>

        <button className="btn btn-sm text-primary" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div
        className="modal-body p-0 image-gallery"
        style={{
          backgroundImage: loadedImage,
        }}>
        <button
          disabled={currentIndex === 0}
          className="carousel carousel--left"
          onClick={() => setCurrentIndex(currentIndex - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </button>
        {!loadedImage && <Loader />}
        <button
          disabled={currentIndex === imageList?.length - 1}
          className="carousel carousel--right"
          onClick={() => setCurrentIndex(currentIndex + 1)}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      </div>
      <div className="modal-footer d-flex justify-content-center align-items-center">
        <button
          className="btn btn-sm text-secondary shaadow"
          onClick={download}
          disabled={!loadedImage}>
          <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </button>
        <p className="mb-0 small fw-bold">
          <span className="ms-5">{currentIndex + 1}</span>{" "}
          <span className="text-muted">of</span>{" "}
          <span className="me-5">{imageList?.length}</span>
        </p>
        <Tooltip
          trigger="click"
          position="top"
          theme="light"
          interactive={false}
          arrow={true}
          distance={10}
          html={
            <p className="text-dark small mb-2">
              <span className="text-primary">Size: </span>
              <span className="fw-bold">
                {imageList?.[currentIndex].width}
              </span>{" "}
              <span className="text-muted">by</span>{" "}
              <span className="fw-bold">
                {imageList?.[currentIndex].height}
              </span>
            </p>
          }>
          <button className="btn btn-sm text-secondary shaadow">
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </Tooltip>
      </div>
    </>
  );
}

export default ImageGallery;
