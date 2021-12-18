import { ENDPOINTS } from "../../constants/endpoints";
import { searchCategories } from "../../constants/globalSearch";
import axios from "../axiosConfig";

function globalSearch() {
  // these params will be provided by the component
  return axios.get(ENDPOINTS.globalSearch + searchCategories.MOVIE, {
    params: {
      query: "batman",
    },
  });
}

function configuration() {
  return axios.get(ENDPOINTS.configuration);
}

export { globalSearch, configuration };
