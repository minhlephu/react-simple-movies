import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-5 text-2xl font-bold text-white capitalize ">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>

      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-5 text-2xl font-bold text-white capitalize ">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-10 movies-layout page-container">
        <h2 className="mb-5 text-2xl font-bold text-white capitalize ">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
