import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GenericCard from "./GenericCard";

const FilmList = ({ films }) => {
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
