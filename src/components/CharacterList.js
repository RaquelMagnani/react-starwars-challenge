import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../utils";

const CharactersList = ({ cast }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (cast?.length > 0 && characters.length === 0) {
      let castArr = [];
      cast.forEach((element) => {
        fetch(element)
          .then((response) => response.json())
          .then((data) => castArr.push(data));
      });
      setCharacters(castArr);
    }
  }, [cast]);

  return (
    <ol>
      {characters.map((character) => (
        <li key={`unique-${character.index}-`} style={{ textAlign: "left" }}>
          <Link to={`/people/${getIdFromUrl(character.url)}`}>
            {character.name}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default CharactersList;
