import React from "react";
import FilmList from "./components/FilmList";
import Film from "./components/Film";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Character from "./components/Character";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationMenu></NavigationMenu>
      <Router>
        <Routes>
          <Route path="/" exact element={<FilmList />}></Route>
          <Route path="/film/:id" element={<Film />}></Route>
          <Route path="/people/:id" element={<Character />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
