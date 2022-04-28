import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/filmList.scss";
import CardFilm from "./CardFilm";

const FilmList = ({ films }) => {
  console.log(films);
  return (
    <>
      <Container fluid>
        <Row>
          {films.map((film) => {
            return (
              <Col>
                <CardFilm film={film} />
              </Col>
            );
          })}
        </Row>
      </Container>
      ;
    </>
  );
};
export default FilmList;
