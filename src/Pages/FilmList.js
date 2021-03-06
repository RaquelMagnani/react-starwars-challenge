import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GenericCard from "../components/GenericCard";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  function handleBookmark() {
    setFilms((previous) => {
      return { ...previous, is_bookmarked: !previous.is_bookmarked };
    });
  }
  

  return (
    <>
      <Container fluid>
        <h1 className="d-flex justify-content-center">Star Wars Movies!</h1>
        <Row>
          {films.map((film, index) => {
            return (
              <Col
                key={`u-${film.episode_id}-${index}`}
                lg={3}
                md={6}
                className="mt-3 d-flex justify-content-center"
              >
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
