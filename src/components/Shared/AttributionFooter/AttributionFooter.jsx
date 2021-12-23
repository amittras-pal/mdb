import React from "react";
import tmdbLogo from "../../../resources/images/tmdb-logo.svg";

function AttributionFooter() {
  return (
    <div className="footer text-secondary d-flex justify-content-between align-items-center p-2">
      <p className="m-0 small">
        This program uses community curated data provided by{" "}
        <span className="fw-bold">TMDB (themoviedb.org) </span> API. This
        program is in no way endorsed by TMDB or its associates.
      </p>
      <img src={tmdbLogo} alt="TMDB Logo" width={100} />
    </div>
  );
}

export default AttributionFooter;
