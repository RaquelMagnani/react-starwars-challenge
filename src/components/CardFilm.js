import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/card.scss";
import { getIdFromUrl } from "../utils";

const CardFilm = (props) => {
  const { film } = props;

  return (
    <>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            alt={`poster of ${film.title}`}
            src={`https://starwars-visualguide.com/assets/img/films/${getIdFromUrl(
              film.url
            )}.jpg`}
          />
          <Card.Body>
            <Card.Title>{film.title}</Card.Title>
            <Button variant="outline-primary">
              <Link to={`/movie/${getIdFromUrl(film.url)}`}>{film.title}</Link>
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default CardFilm;
