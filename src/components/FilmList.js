import React from "react";

import { useNavigate } from "react-router-dom";

const FilmList = ({ films }) => {
  const navigate = useNavigate();
  const handleFilmDetailsClick = () => {
    navigate("/film");
  };
  return (
    <>
      <h1>teste</h1>
      <ul>
        {films.map((film) => {
          return (
            <li>
              {film.title}
              {` episode: ${film.episode_id}`}
              <button onClick={handleFilmDetailsClick}>details</button>
              {/* <img
                src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
                alt="imagem "
              /> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilmList;
