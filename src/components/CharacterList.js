import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../utils";

const CharactersList = ({ characters }) => {
  return (
    <ul className="container-infos">
      {characters?.map((character, index) => (
        <li
          key={`unique-${character.url}-${index}`}
          style={{ textAlign: "left" }}
        >
          <i className="bi bi-person-circle p-2"></i>
          <Link className="link" to={`/people/${getIdFromUrl(character.url)}`}>
            {character.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
