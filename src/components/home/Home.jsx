import React from "react";
import MovieTile from "../shared/MovieTile/MovieTile";
import "./Home.scss";
import SidebarNav from "./SidebarNav/SidebarNav";
import jw3 from "../../resources/images/john-wick-3.png";
import jw2 from "../../resources/images/jw-2.jfif";
import shangChi from "../../resources/images/shang-chi.jpg";

function Home() {
  const movies = [
    {
      title: "John Wick: Chapter 3",
      year: 2019,
      genres: "Action, Crime",
      imdbRating: 7.4,
      image: jw3,
    },
    {
      title: "John Wick: Chapter 2",
      year: 2017,
      genres: "Action, Crime, Thriller",
      imdbRating: 7.5,
      image: jw2,
    },
    {
      title: "Shang Chi and the legend of the ten rings",
      year: 2021,
      genres: "Action, Hero",
      imdbRating: 7.5,
      image: shangChi,
    },
  ];
  return (
    <div className="home">
      <SidebarNav />
      <main className="main d-flex justify-content-center align-items-center h-100">
        <h3 className="fst-italic fw-bold">Main Content</h3>
      </main>
      <div className="right-sidebar">
        <h4 className="mb-3 heading">Popular Movies</h4>
        {movies.map((movie) => (
          <MovieTile movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
