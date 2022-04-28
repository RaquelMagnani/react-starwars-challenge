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
    <Container fluid className="">
      <Row>
        <Col md={8}>
          <div className="container-infos ">
            <h1>{film.title}</h1>
            <p>
              <span>Premiere Year: </span>
              {new Date(film.release_date).getFullYear()}
            </p>
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
          <Row>
            <div className="container-infos">
              <span>Characters: </span>

              <CharactersList cast={film.characters} />
            </div>
          </Row>
        </Col>
        <Col md={3}>
          <img
            alt={`poster of ${film.title}`}
            src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
          />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Film;
