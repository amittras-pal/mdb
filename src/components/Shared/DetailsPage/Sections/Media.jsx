import React, { useState } from "react";
import ModalComponent from "../../Modal/Modal";
import ImageGallery from "../Modals/ImageGallery";
import VideoGallery from "../Modals/VideoGallery";
import { useApiConfiguration } from "../../../../hooks/query.hooks";
import { createImageUrl } from "../../../../utils/utils";

function Media({ data, type }) {
  const [mediaView, setMediaView] = useState("video");
  const [showGallery, setShowGallery] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  const { data: config } = useApiConfiguration();

  const openGallery = () => {
    switch (mediaView) {
      case "video":
        setGalleryData(
          data.videos.results.filter((vid) => vid.site === "YouTube")
        );
        setShowGallery(true);
        break;
      case "backdrop":
        setGalleryData(data.images.backdrops);
        setShowGallery(true);
        break;
      case "poster":
        setGalleryData(data.images.posters);
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
      <div className="media mb-3">
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
                ({data.videos?.results.length})
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
                ({data.images?.posters.length})
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
                ({data.images?.backdrops.length})
              </span>
            </button>
          </div>
        </div>
        <div
          className="media__content py-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, #201d1d 0%, transparent, #201d1d 100%), url(${createImageUrl(
              "w780",
              "backdrop",
              config,
              data.images.backdrops[0].file_path
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
            title={type === "movie" ? data.title : data.name}
            videoList={galleryData}
            onClose={closeGallery}
          />
        ) : (
          <ImageGallery
            title={type === "movie" ? data.title : data.name}
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
