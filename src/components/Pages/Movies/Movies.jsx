import React from "react";
import { useSearchParams } from "react-router-dom";

function Movies() {
  const [queryParams] = useSearchParams();

  return (
    <div>
      <h3>{queryParams.values.length}</h3>
    </div>
  );
}

export default Movies;
