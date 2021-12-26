import React from "react";
import { useParams } from "react-router-dom";
import { useShowById } from "../../../hooks/query.hooks";
import { setDocTitle } from "../../../utils/utils";
import "../../Shared/DetailsPage/DetailsPage.scss";
import Cast from "../../Shared/DetailsPage/Sections/Cast";
import Header from "../../Shared/DetailsPage/Sections/Header";
import Media from "../../Shared/DetailsPage/Sections/Media";
import Recommendations from "../../Shared/DetailsPage/Sections/Recommendations";
import Reviews from "../../Shared/DetailsPage/Sections/Reviews";
import Loader from "../../Shared/Loader/Loader";
import Overview from "./Sections/Overview";
import InfoAside from "./Sections/InfoAside";
import AttributionFooter from "../../Shared/AttributionFooter/AttributionFooter";

function ShowDetails() {
  const { id: movieId } = useParams();
  const { data, isLoading } = useShowById(movieId);

  if (isLoading)
    return (
      <div className="loading d-flex justify-content-center align-items-center w-100 h-100">
        <Loader />
      </div>
    );

  const show = data?.data;
  if (show) setDocTitle(`[SHOW] ${show.original_name}`);

  return (
    <div className="show-details">
      <Header type="show" data={show} />
      <div className="row my-3 mx-0">
        <div className="col-md-9">
          <Overview show={show} />
          <Cast data={show} type="show" />
          <Media data={show} type="show" />
          <Reviews data={show} type="show" />
          <Recommendations type="show" data={show} />
        </div>
        <div className="col-md-3">
          <InfoAside show={show} />
        </div>
      </div>
      <AttributionFooter />
    </div>
  );
}

export default ShowDetails;
