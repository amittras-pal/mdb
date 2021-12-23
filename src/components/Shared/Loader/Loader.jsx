import React from "react";

function Loader() {
  return (
    <div className="loader w-100 h-100 d-flex justify-content-center align-items-center py-5 my-3">
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
