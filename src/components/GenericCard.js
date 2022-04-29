import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/cardFilm.scss";
import { getIdFromUrl } from "../utils";

const GenericCard = (props) => {
  return (
    <>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            alt={`poster of ${props.name}`}
            src={`https://starwars-visualguide.com/assets/img/${
              props.resourceImage
            }/${getIdFromUrl(props.url)}.jpg`}
          />
          <Card.Body>
            <Link
              className="d-flex justify-content-center link"
              to={`/${props.resource}/${getIdFromUrl(props.url)}`}
            >
              {props.name}
            </Link>
            <button>
              <i class="bi bi-star"></i>
            </button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default GenericCard;
