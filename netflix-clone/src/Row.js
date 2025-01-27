import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios"; //axios==instance

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // a snippet of code that runs based on a specific condition/ variable
  useEffect(() => {
    //every time row loads useEffect runs and feed info
    // if [], run once when the row loads, and don't run again
    // if [movies], run every time movies changes
    // sending to 3rd party request so use async
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //await == if it takes 5sec wait and proceed the code
      //https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_network=123
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    //every time getting anything from outside of block then must include on useeffect []
  }, [fetchUrl]);
  //console.table(movies);
  return (
    <div className="row">
      {/** title */}
      <h2>{title}</h2>
      {/** container -> posters */}
      <div className="row__posters">
        {/** serveral row poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
