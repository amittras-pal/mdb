import React, { useState } from "react";
import ModalComponent from "../../../../Shared/Modal/Modal";
import ImageGallery from "../Modals/ImageGalleryModal/ImageGallery";

function Media({ movie }) {
  const [mediaView, setMediaView] = useState("backdrop");
  const [showGallery, setShowGallery] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  const openGallery = () => {
    switch (mediaView) {
      case "video":
        setShowGallery(true);
        console.log(movie.videos);
        break;
      case "backdrop":
        setGalleryData(movie.images.backdrops);
        setShowGallery(true);
        break;
      case "poster":
        setGalleryData(movie.images.posters);
        setShowGallery(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="media my-3">
        <div className="media__header">
          <span className="mb-0 fw-bold text-primary me-3">Media</span>
          <div className="tabs">
            <button
              className={
                mediaView === "video"
                  ? "media__header__tab active"
                  : "media__header__tab"
              }
              onClick={() => setMediaView("video")}>
              Videos{" "}
              <span className="text-warning">
                ({movie.videos?.results.length})
              </span>
            </button>
            <button
              className={
                mediaView === "backdrop"
                  ? "media__header__tab active"
                  : "media__header__tab"
              }
              onClick={() => setMediaView("backdrop")}>
              Backdrops{" "}
              <span className="text-warning">
                ({movie.images?.backdrops.length})
              </span>
            </button>
            <button
              className={
                mediaView === "poster"
                  ? "media__header__tab active"
                  : "media__header__tab"
              }
              onClick={() => setMediaView("poster")}>
              Posters{" "}
              <span className="text-warning">
                ({movie.images?.posters.length})
              </span>
            </button>
          </div>
        </div>
        <div className="media__content p-3">
          <button
            className="btn btn-sm btn-primary shadow"
            onClick={openGallery}>
            Open {mediaView} gallery
          </button>
        </div>
      </div>
      <ModalComponent
        show={showGallery}
        onRequestHide={() => setShowGallery(false)}>
        <ImageGallery
          title={movie.title}
          imageList={galleryData}
          galleryType={mediaView}
          onClose={() => setShowGallery(false)}
        />
      </ModalComponent>
    </>
  );
}

export default Media;
