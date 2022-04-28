import React from "react";
import { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});
  const getData = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await response.json();
    setCharacterInfo(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Row>
        <Col>
          <h1>{`${characterInfo.name}`}</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>{`Height: ${characterInfo.height}`}</ListGroup.Item>
            <ListGroup.Item>{`Weight: ${characterInfo.mass}`}</ListGroup.Item>
            <ListGroup.Item>{`Hair Color: ${characterInfo.hair_color}`}</ListGroup.Item>
            <ListGroup.Item>{`Skin Color: ${characterInfo.skin_color}`}</ListGroup.Item>
            <ListGroup.Item>{`Eye Color: ${characterInfo.eye_color}`}</ListGroup.Item>
            <ListGroup.Item>{`Birth Year: ${characterInfo.birth_year}`}</ListGroup.Item>
            <ListGroup.Item>{`Gender: ${characterInfo.gender}`}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <img
            alt={`poster of ${characterInfo.title}`}
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Character;
