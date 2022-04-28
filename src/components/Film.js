import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import CharactersList from "./CharacterList";

const Film = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}/`)
      .then((response) => response.json())
      .then((data) => setFilm(data));
  }, []);
  return (
    <>
      <header>
        <h1>{film.title}</h1>
        <img
          alt={`poster of ${film.title}`}
          src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
        />
      </header>
      <main>
        <div>
          <p></p>
        </div>
      </main>
      <p></p>
      <p>{`About: ${film.opening_crawl}`}</p>
      <p>{`Director: ${film.director}`}</p>
      <div>
        <p>Characters: </p>
        <CharactersList cast={film.characters} />
      </div>
    </>
  );
};

export default Film;
