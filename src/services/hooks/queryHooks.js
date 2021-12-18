import { useQuery } from "react-query";
import { globalSearch, configuration } from "../api/api";

function useGlobalSearch() {
  return useQuery("global-search", globalSearch);
}

function useApiConfiguration() {
  return useQuery("config", configuration);
}

export { useGlobalSearch, useApiConfiguration };
