import React, { useState } from "react";
import "./App.css";
import AddNewMovie from "./Components/AddNewMovie";
import FilterRate from "./Components/FilterRate";
import MovieList from "./Components/MovieList";
import NavBar from "./Components/NavBar";
import { moviesData } from "./Fake/data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rate, setRate] = useState(1);

  return (
    <div>
      <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterRate rate={rate} setRate={setRate} isRating={false} />
      <AddNewMovie movie={movies} setMovie={setMovies} />
      <MovieList movie={movies} inputSearch={inputSearch} rating={rate} />
    </div>
  );
}

export default App;
