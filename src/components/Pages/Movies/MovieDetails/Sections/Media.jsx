import React, { useState } from "react";

function Media({ movie }) {
  const [mediaView, setMediaView] = useState("videos");
  return (
    <div className="media my-3">
      <div className="media__header">
        <span className="mb-0 fw-bold text-primary me-3">Media</span>

        <div className="tabs">
          <button
            className={
              mediaView === "videos"
                ? "media__header__tab active"
                : "media__header__tab"
            }
            onClick={() => setMediaView("videos")}
          >
            Videos{" "}
            <span className="text-warning">
              ({movie.videos?.results.length})
            </span>
          </button>
          <button
            className={
              mediaView === "backdrops"
                ? "media__header__tab active"
                : "media__header__tab"
            }
            onClick={() => setMediaView("backdrops")}
          >
            Backdrops{" "}
            <span className="text-warning">
              ({movie.images?.backdrops.length})
            </span>
          </button>
          <button
            className={
              mediaView === "posters"
                ? "media__header__tab active"
                : "media__header__tab"
            }
            onClick={() => setMediaView("posters")}
          >
            Posters{" "}
            <span className="text-warning">
              ({movie.images?.posters.length})
            </span>
          </button>
        </div>
      </div>
      <div className="media__content py-3">
        {mediaView === "videos" && (
          <div className="media__videos">
            <h2>Showing Videos</h2>
          </div>
        )}
        {mediaView === "backdrops" && (
          <div className="media__backdrops">
            <h2>Showing Backdrops</h2>
          </div>
        )}
        {mediaView === "posters" && (
          <div className="media__posters">
            <h2>Showing Posters</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Media;
