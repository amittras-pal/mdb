import { useQuery } from "react-query";
import {
  globalSearch,
  configuration,
  popularMovies,
  popularTvShows,
  popularPeople,
  movieById,
  showById,
  getReviews,
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

export function useShowById(showId) {
  return useQuery(["show", showId], () => showById(showId));
}

export function useReviews(id, type, page) {
  return useQuery([`${type}-reviews`, id, page], () =>
    getReviews(id, type, page)
  );
}
