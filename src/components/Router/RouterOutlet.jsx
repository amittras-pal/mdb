import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Home from "../Pages/home/Home";
import Login from "../Pages/Login/Login";

function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
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
