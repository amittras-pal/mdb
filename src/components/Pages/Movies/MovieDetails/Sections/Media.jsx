import React, { useState } from "react";
import ModalComponent from "../../../../Shared/Modal/Modal";
import ImageGallery from "../Modals/GalleryModal/ImageGallery";
import VideoGallery from "../Modals/GalleryModal/VideoGallery";
import { useApiConfiguration } from "../../../../../hooks/query.hooks";
import { createImageUrl } from "../../../../../utils/utils";

function Media({ movie }) {
  const [mediaView, setMediaView] = useState("video");
  const [showGallery, setShowGallery] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  const { data: config } = useApiConfiguration();

  const openGallery = () => {
    switch (mediaView) {
      case "video":
        setGalleryData(
          movie.videos.results.filter((vid) => vid.site === "YouTube")
        );
        setShowGallery(true);
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

  const closeGallery = () => {
    setShowGallery(false);
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
          </div>
        </div>
        <div
          className="media__content py-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, #201d1d 10%, transparent 90%, #201d1d 100%), url(${createImageUrl(
              "w780",
              "backdrop",
              config,
              movie.images.backdrops[0].file_path
            )})`,
          }}>
          <button
            className="btn btn-lg btn-primary shadow shadow"
            onClick={openGallery}>
            Open {mediaView} gallery
          </button>
        </div>
      </div>
      <ModalComponent show={showGallery} onRequestHide={closeGallery}>
        {mediaView === "video" ? (
          <VideoGallery
            title={movie.title}
            videoList={galleryData}
            onClose={closeGallery}
          />
        ) : (
          <ImageGallery
            title={movie.title}
            imageList={galleryData}
            galleryType={mediaView}
            onClose={closeGallery}
          />
        )}
      </ModalComponent>
    </>
  );
}

export default Media;
