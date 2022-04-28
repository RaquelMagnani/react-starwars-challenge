import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/cardFilm.scss";
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
            <Link
              className="d-flex justify-content-center link"
              to={`/film/${getIdFromUrl(film.url)}`}
            >
              {film.title}
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default CardFilm;
