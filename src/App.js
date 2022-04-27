import axios from "axios";
import React, { useEffect, useState } from "react";
import FilmList from "./components/FilmList";
import Film from "./components/Film";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((resposta) => {
      setFilms(resposta.data.results);
      console.log("server", resposta.data);
      console.log("state", films);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<FilmList films={films} />}></Route>
        <Route path="/film" element={<Film />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
