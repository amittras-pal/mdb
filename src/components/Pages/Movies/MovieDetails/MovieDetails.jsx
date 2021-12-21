import React from "react";
import { useParams } from "react-router-dom";
import { useMovieById } from "../../../../services/hooks/queryHooks";
import { setDocTitle } from "../../../../utils/utils";
import AttributionFooter from "../../../Shared/AttributionFooter/AttributionFooter";
import Loader from "../../../Shared/Loader/Loader";
import "./MovieDetails.scss";
import Cast from "./Sections/Cast";
import Header from "./Sections/Header";
import InfoAside from "./Sections/InfoAside";
import Media from "./Sections/Media";
import Overview from "./Sections/Overview";
import Recommendations from "./Sections/Recommendations";
import Reviews from "./Sections/Reviews";

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
      <Header movie={movie} />
      <div className="row m-0 mt-3">
        <div className="col-md-9">
          <Overview movie={movie} />
          <Cast movie={movie} />
          <Media movie={movie} />
          <Reviews />
          <Recommendations />
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
