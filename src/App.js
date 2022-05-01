import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilmList from "./Pages/FilmList";
import Film from "./Pages/Film";
import Character from "./Pages/Character";
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
