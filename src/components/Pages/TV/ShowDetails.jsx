import React from "react";
import { useParams } from "react-router-dom";
import { useShowById } from "../../../hooks/query.hooks";
import { setDocTitle } from "../../../utils/utils";
import Loader from "../../Shared/Loader/Loader";
import Header from "../../Shared/DetailsPage/Sections/Header";
import "../../Shared/DetailsPage/DetailsPage.scss";
// import { showResponse as show } from "../showResponse";

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
  console.log(show);

  return (
    <div className="show-details">
      <Header type="show" data={show} />
    </div>
  );
}

export default ShowDetails;
