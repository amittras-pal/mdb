import { useQuery } from "react-query";
import {
  globalSearch,
  configuration,
  popularMovies,
  popularTvShows,
} from "../api/api";

function useGlobalSearch() {
  return useQuery("global-search", globalSearch);
}

function usePopularMovies() {
  return useQuery("popular-movies", popularMovies);
}

function usePopularTvShows() {
  return useQuery("popular-tv-shows", popularTvShows);
}

function useApiConfiguration() {
  return useQuery("config", configuration);
}

export {
  useGlobalSearch,
  usePopularMovies,
  usePopularTvShows,
  useApiConfiguration,
};
