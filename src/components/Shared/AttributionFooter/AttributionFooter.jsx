import React from "react";
import tmdbLogo from "../../../resources/images/tmdb-logo.svg";

function AttributionFooter() {
  return (
    <div
      className="footer bg-danger text-light d-flex justify-content-center align-items-center p-2"
      style={{ gap: "1.25rem" }}>
      <p className="m-0 small">
        This program uses community curated data provided by{" "}
        <span className="fw-bold">TMDB (themoviedb.org) </span> API. This
        program is in no way endorsed by TMDb or its associates.
      </p>
      <img src={tmdbLogo} alt="TMDB Logo" width={100} />
    </div>
  );
}

export default AttributionFooter;
