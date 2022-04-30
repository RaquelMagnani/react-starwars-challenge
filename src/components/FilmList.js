import React, { useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { Col, Container, Row } from "react-bootstrap";
import GenericCard from "./GenericCard";

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  function handleBookmark(name) {
    const cloneFilms = cloneDeep(films);
    const film = cloneFilms.find((film) => {
      return film.title === name;
    });
    film.is_bookmarked = !film.is_bookmarked;
    setFilms(cloneFilms);
  }

  return (
    <>
      <Container fluid>
        <h1 className="d-flex justify-content-center">Star Wars Movies!</h1>
        <Row>
          {films.map((film) => {
            return (
              <Col lg={3} md={6} className="mt-3 d-flex justify-content-center">
                <GenericCard
                  name={film.title}
                  resourceImage="films"
                  resource="film"
                  url={film.url}
                  isBookmarked={film.is_bookmarked}
                  handleBookmark={handleBookmark}
                ></GenericCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default FilmList;
