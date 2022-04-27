import React from "react";

import { Link } from "react-router-dom";

const FilmList = ({ films }) => {
  function getFilmId(url) {
    return url[url.length - 2];
  }
  console.log(films);
  return (
    <>
      <ul>
        {films.map((film) => {
          return (
            <li>
              {film.title}
              {` episode: ${film.episode_id}`}
              <Link to={`/movie/${getFilmId(film.url)}`}>details</Link>
              <img
                alt={`poster of ${film.title}`}
                src={`https://starwars-visualguide.com/assets/img/films/${getFilmId(
                  film.url
                )}.jpg`}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilmList;
