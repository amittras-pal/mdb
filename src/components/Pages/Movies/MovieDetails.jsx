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
import Recommendations from "../../Shared/DetailsPage/Sections/Recommendations";

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
      <div className="row mx-0 my-3">
        <div className="col-md-9">
          <Overview movie={movie} />
          <Cast data={movie} type="movie" />
          <Media data={movie} type="movie" />
          <Reviews data={movie} type="movie" />
          <Recommendations data={movie} type="movie" />
        </div>
        <div className="col-md-3">
          <InfoAside movie={movie} />
        </div>
      </div>
      <AttributionFooter />
    </div>
  );
}

export default MovieDetails;
