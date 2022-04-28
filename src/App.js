import React, { useEffect, useState } from "react";
import FilmList from "./components/FilmList";
import Film from "./components/Film";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Character from "./components/Character";

function App() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<FilmList films={films} />}></Route>
        <Route path="/film/:id" element={<Film />}></Route>
        <Route path="/people/:id" element={<Character />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
