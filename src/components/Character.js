import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});
  const [homeWorld, setHomeWorld] = useState({});
  const getData = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await response.json();
    setCharacterInfo(data);
  };
  const getHomeWorldData = async () => {
    if (characterInfo !== {}) {
      const response = await fetch(characterInfo.homeworld);
      const data = await response.json();
      setHomeWorld(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getHomeWorldData();
  }, [characterInfo]);
  return (
    <Container>
      <Row>
        <Col md={6} className="container-infos">
          <h1>{`${characterInfo.name}`}</h1>
          <ul>
            <li>
              <span>Height: </span> {characterInfo.height}
            </li>
            <li>
              <span>Weight: </span> {characterInfo.mass}
            </li>
            <li>
              <span>Hair Color: </span> {characterInfo.hair_color}
            </li>
            <li>
              <span>Skin Color: </span> {characterInfo.skin_color}
            </li>
            <li>
              <span>Eye Color: </span> {characterInfo.eye_color}
            </li>
            <li>
              <span>Birth Year: </span> {characterInfo.birth_year}
            </li>
            <li>
              <span>Gender: </span> {characterInfo.gender}
            </li>
            <li>
              <span>Home World: </span> {homeWorld.name}
            </li>
          </ul>
        </Col>

        <Col md={6}>
          <img
            alt={`poster of ${characterInfo.title}`}
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Character;
