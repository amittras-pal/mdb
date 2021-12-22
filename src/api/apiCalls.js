import { ENDPOINTS } from "../constants/endpoints";
import { categories } from "../constants/globalSearch";
import axios from "./axiosConfig";

export function globalSearch() {
  // Implementation needed, not yet used anywhere.
  return axios.get(ENDPOINTS.globalSearch + categories[0].value, {
    params: {
      query: "batman",
    },
  });
}

export function configuration() {
  return axios.get(ENDPOINTS.configuration);
}

export function popularMovies() {
  return axios.get(ENDPOINTS.popularMovies);
}

export function popularTvShows() {
  return axios.get(ENDPOINTS.popularTvShows);
}
export function popularPeople() {
  return axios.get(ENDPOINTS.popularPeople);
}

export function movieById(movieId) {
  return axios.get(ENDPOINTS.movieById + movieId, {
    params: {
      append_to_response:
        "videos,images,reviews,credits,recommendations,keywords",
    },
  });
}
