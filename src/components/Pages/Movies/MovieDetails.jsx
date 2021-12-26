import React from "react";
import { useParams } from "react-router-dom";
import { useMovieById } from "../../../hooks/query.hooks";
import { setDocTitle } from "../../../utils/utils";
import AttributionFooter from "../../Shared/AttributionFooter/AttributionFooter";
import "../../Shared/DetailsPage/DetailsPage.scss";
import Cast from "../../Shared/DetailsPage/Sections/Cast";
import Media from "../../Shared/DetailsPage/Sections/Media";
import Reviews from "../../Shared/DetailsPage/Sections/Reviews";
import Loader from "../../Shared/Loader/Loader";
import Header from "../../Shared/DetailsPage/Sections/Header";
import InfoAside from "./Sections/InfoAside";
import Overview from "./Sections/Overview";
import Recommendations from "./Sections/Recommendations";

function MovieDetails() {
  const { id: movieId } = useParams();
  const { data, isLoading } = useMovieById(movieId);

  if (isLoading)
    return (
      <div className="loading d-flex justify-content-center align-items-center w-100 h-100">
        <Loader />
      </div>
    );

  const movie = data?.data;
  if (movie) setDocTitle(`[MOVIE] ${movie.title}`);

  return (
    <div className="movie-details">
      <Header type="movie" data={movie} />
      <div className="row m-0 mt-3">
        <div className="col-md-9">
          <Overview movie={movie} />
          <Cast movie={movie} />
          <Media movie={movie} />
          <Reviews movie={movie} />
          <Recommendations movie={movie} />
        </div>
        <div className="col-md-3 right-bar">
          <InfoAside movie={movie} />
        </div>
      </div>
      <AttributionFooter />
    </div>
  );
}

export default MovieDetails;
