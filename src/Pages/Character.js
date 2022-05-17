import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
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
      console.log('Character Info', characterInfo)
      setHomeWorld(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getHomeWorldData();
  }, [characterInfo]);

  function handleBookmark() {
    setCharacterInfo((previous) => {
      return { ...previous, is_bookmarked: !previous.is_bookmarked };
    });
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="container-infos">
          <div className="d-flex justify-content-between">
            <h1>{`${characterInfo.name}`}</h1>
            <Button onClick={() => handleBookmark()}>
              {characterInfo.is_bookmarked ? (
                <i className="bi bi-star-fill"></i>
              ) : (
                <i className="bi bi-star"></i>
              )}
            </Button>
          </div>
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
            style={{ width: "100%" }}
            alt={`poster of ${characterInfo.title}`}
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Character;
