import React from "react";
import "./MovieDetails.scss";
import { movie } from "./movie";
import { useApiConfiguration } from "../../../../services/hooks/queryHooks";
// import { useParams } from "react-router-dom";
// import { useMovieById } from "../../../../services/hooks/queryHooks";

function MovieDetails() {
  // const { id: movieId } = useParams();
  const { data: configData } = useApiConfiguration();

  // const { data, isLoading } = useMovieById(movieId);
  // console.log(data?.data);

  // ${configData?.data.images.secure_base_url}original${movie.backdrop_path}
  // ${configData?.data.images.secure_base_url}w342${movie.poster_path}

  return (
    <div className="movie-details">
      <div className="header">
        {/* Backdrop, Poster, Title, User Score, Genres, Overview, Important people,  */}
      </div>
      <div className="body">
        <div className="row m-0">
          <div className="col-md-9">
            <div className="cast-crew"></div>
            <div className="media"></div>
            <div className="reviews"></div>
            <div className="recommendations"></div>
          </div>
          <div className="col-md-3">
            <div className="social-links"></div>
            <div className="info">
              {/* Status, Language, Budget, Revenue, Keywords */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
