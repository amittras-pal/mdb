import { useQuery } from "react-query";
import {
  globalSearch,
  configuration,
  popularMovies,
  popularTvShows,
  popularPeople,
  movieById,
  movieReviewsById,
  showById,
} from "../api/apiCalls";

export function useGlobalSearch() {
  return useQuery("global-search", globalSearch);
}

export function usePopularMovies() {
  return useQuery("popular-movies", popularMovies);
}

export function usePopularTvShows() {
  return useQuery("popular-tv-shows", popularTvShows);
}

export function usePopularPeople() {
  return useQuery("popular-people", popularPeople);
}

export function useApiConfiguration() {
  return useQuery("config", configuration);
}

export function useMovieById(movieId) {
  return useQuery(`movie-${movieId}`, () => movieById(movieId));
}

export function useMovieReviews(movieId, page) {
  return useQuery(["movie_reviews", movieId, page], () =>
    movieReviewsById(movieId, page)
  );
}

export function useShowById(showId) {
  return useQuery(["show", showId], () => showById(showId));
}
