import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInterval, setIsInterval] = useState(true);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");

      if (!response.ok) {
        throw new Error("Something went wrong....Retrying");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  let content = <p> Found No Movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (isInterval) {
    if (error) {
      content = (
        <p>
          {error} <button onClick={reloadPageHamdler}> Cancel </button>{" "}
        </p>
      );

      let vinay = setInterval(() => fetchMoviesHandler(), 5000);

      function reloadPageHamdler() {
        setIsInterval(false);
      }
      
      if (!isInterval) {
        clearInterval(vinay)
        window.location.reload(false)
      }
    }
  }

  if (isLoading) {
    content = <p> Loading... </p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
