import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/home/Home";
import Login from "../Pages/Login/Login";
import Movies from "../Pages/Movies/Movies";
import SingleMovie from "../Pages/Movies/SingleMovie";

function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/view/:id" element={<SingleMovie />} />
      <Route
        path="*"
        element={
          <div className="not-found">
            <h3>Page Not implemented.</h3>
          </div>
        }
      />
    </Routes>
  );
}

export default RouterOutlet;
