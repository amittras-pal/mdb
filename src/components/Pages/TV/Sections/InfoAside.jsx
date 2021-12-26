import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import React from "react";
import Image from "../../../Shared/Image/Image";

function InfoAside({ show }) {
  return (
    <div className="aside">
      <div className="social-links d-flex mb-3">
        {show.homepage && (
          <a
            href={show.homepage}
            target="_blank"
            className="btn btn-sm btn-secondary"
            title="Visit Homepage"
            rel="noreferrer">
            <FontAwesomeIcon icon={faLink} />
          </a>
        )}
      </div>

      {show.spoken_languages.length > 0 && (
        <>
          <p className="mb-1 fw-bold text-muted">Spoken Languages</p>
          <p className="small fw-bold d-flex flex-wrap">
            {show.spoken_languages.map((lan, i, { length }) => (
              <span className="me-1" key={lan.english_name}>
                {lan.english_name}
                {length - 1 !== i ? "," : ""}
              </span>
            ))}
          </p>
        </>
      )}
      <p className="mb-1 fw-bold text-muted">First Aired </p>
      <p className="small fw-bold">
        {DateTime.fromISO(show.first_air_date).toLocaleString(
          DateTime.DATE_MED
        )}
      </p>
      {show.networks?.length > 0 && (
        <>
          <p className="mb-1 fw-bold text-muted">Network </p>
          <div className="networks small fw-bold d-flex flex-wrap">
            {show.networks.map((network) => (
              <div className="logo" key={network.id}>
                <Image
                  imageType="logo"
                  size="w92"
                  imagePath={network.logo_path}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {show.keywords?.results?.length > 0 && (
        <>
          <p className="mb-1 fw-bold text-muted">Keywords</p>
          <div className="keywords small fw-bold d-flex flex-wrap">
            {show.keywords.results.map((kw) => (
              <span className="me-2 keyword small" key={kw.id}>
                {kw.name}
              </span>
            ))}
          </div>
        </>
      )}
      {show.production_companies?.length > 0 && (
        <>
          <p className="mb-1 fw-bold text-muted">Production Companies</p>
          <div className="list-group list-group-flush bg-dark prod-companies">
            {show.production_companies.map((company) => (
              <div
                className="list-group-item small bg-dark text-secondary"
                key={company.id}>
                {company.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default InfoAside;
