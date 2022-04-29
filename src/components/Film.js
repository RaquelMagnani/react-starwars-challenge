import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CharactersList from "./CharacterList";

const Film = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}/`)
      .then((response) => response.json())
      .then((data) => setFilm(data));
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col className md={8}>
          <Row>
            <Col>
              <div className="container-infos p-2 mb-2 ">
                <h1>{film.title}</h1>
                <p>
                  {" "}
                  <span>Director: </span>
                  {film.director}
                </p>
                <p>
                  <span>About: </span>
                  {film.opening_crawl}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="container-infos p-2">
                <span>Characters: </span>

                <CharactersList cast={film.characters} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <img
            alt={`poster of ${film.title}`}
            src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Film;
