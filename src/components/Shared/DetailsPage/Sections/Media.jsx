import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useApiConfiguration } from "../../../../hooks/query.hooks";
import { createImageUrl, setDocTitle } from "../../../../utils/utils";
import ModalComponent from "../../Modal/Modal";
import ImageGallery from "../Modals/ImageGallery";
import VideoGallery from "../Modals/VideoGallery";

function Media({ data, type }) {
  const [mediaView, setMediaView] = useState("video");
  const [galleryData, setGalleryData] = useState(null);

  const [modalParams, setModalParams] = useSearchParams();
  const navigate = useNavigate();

  const { data: config } = useApiConfiguration();

  const titleString = type === "movie" ? data.title : data.name;

  useEffect(() => {
    const media = modalParams.get("media");
    if (media) {
      setDocTitle(`[${type.toUpperCase()}] ${titleString} - ${media}s`);
      setMediaView(media);
      switch (media) {
        case "video":
          setGalleryData(
            data.videos.results.filter((vid) => vid.site === "YouTube")
          );
          break;
        case "backdrop":
          setGalleryData(data.images.backdrops);
          break;
        case "poster":
          setGalleryData(data.images.posters);
          break;
        default:
          setGalleryData(null);
          break;
      }
    } else {
      setGalleryData(null);
    }
  }, [modalParams, data, titleString, type]);

  const openGallery = () => {
    switch (mediaView) {
      case "video":
        setModalParams({ media: "video" });
        break;
      case "backdrop":
        setModalParams({ media: "backdrop" });
        break;
      case "poster":
        setModalParams({ media: "poster" });
        break;
      default:
        break;
    }
  };

  const closeGallery = () => {
    setGalleryData(null);
    navigate(-1);
    setDocTitle(`[${type.toUpperCase()}] ${titleString}`);
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
      <ModalComponent
        show={galleryData ? true : false}
        onRequestHide={closeGallery}>
        {mediaView === "video" ? (
          <VideoGallery
            title={titleString}
            videoList={galleryData}
            onClose={closeGallery}
          />
        ) : (
          <ImageGallery
            title={titleString}
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
