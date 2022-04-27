import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

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
      <p>{film.title}</p>
      <p>{film.director}</p>
      <img
        alt={`poster of ${film.title}`}
        src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
      />
    </>
  );
};

export default Film;
