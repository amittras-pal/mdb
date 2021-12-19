import React from "react";

function Loader() {
  return (
    <div className="loader w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
