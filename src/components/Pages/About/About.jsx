import React from "react";
import "./About.scss";
import { setDocTitle } from "../../../utils/utils";
import { APP_TITLE } from "../../../constants/appConstants";

function About() {
  setDocTitle("About Us");
  return (
    <div className="about">
      <div className="container mt-3">
        <h1 className="fw-normal">About</h1>
      </div>
      <div className="container">
        <p>
          <span className="fw-bold">{APP_TITLE}</span> is built on top of the
          amazing{" "}
          <a
            className="fst-italic text-decoration-none text-warning"
            href="https://www.themoviedb.org/about"
            target="_blank"
            rel="noreferrer">
            themoviedb.org (TMDB),
          </a>{" "}
          which is a community built movie and TV database. Every piece of data
          has been added by an amazing community spead across the world dating
          back to 2008. This program simply uses the generously provided API by
          the platform.
        </p>
        <p>
          {APP_TITLE} is a light, user-friendly application built on the popular
          front-end JavaScript Library React. Through this project, the
          developer, <span className="fst-italic">Amittras Pal,</span> indends
          to showcase their understanding of user-friendly design abilities,
          creativity, and knowledge of JavaScript and React as a whole.
        </p>
      </div>
      <div className="color-palette">
        <h4 className="fw-normal text-dark">Color Palette</h4>
        <div className="swatches">
          <div className="swatch-container">
            <div className="swatch cherry" />
            <p className="mb-0 mt-2 fw-bold text-dark">Cherry</p>
            <p className="m-0 small text-muted">#da0037</p>
          </div>
          <div className="swatch-container">
            <div className="swatch cream" />
            <p className="mb-0 mt-2 fw-bold text-dark">Cream</p>
            <p className="m-0 small text-muted">#ededed</p>
          </div>
          <div className="swatch-container">
            <div className="swatch cheddar" />
            <p className="mb-0 mt-2 fw-bold text-dark">Cheddar</p>
            <p className="m-0 small text-muted">#ffd369</p>
          </div>
          <div className="swatch-container">
            <div className="swatch steel" />
            <p className="mb-0 mt-2 fw-bold text-dark">Steel</p>
            <p className="m-0 small text-muted">#444444</p>
          </div>
          <div className="swatch-container">
            <div className="swatch onyx" />
            <p className="mb-0 mt-2 fw-bold text-dark">Onyx</p>
            <p className="m-0 small text-muted">#201d1d</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
