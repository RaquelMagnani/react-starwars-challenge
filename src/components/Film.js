import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CharactersList from "./CharacterList";

const Film = () => {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  // verify when a promise started
  const [isLoading, setIsLoading] = useState(false);
  // verify when a film promise is finished
  const [filmDataReceived, setfilmDataReceived] = useState(false);
  // verify if happen some error
  const [isError, setIsError] = useState(false);
  // save all characters data
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchFilmData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(`https://swapi.dev/api/films/${id}/`);
        const data = await result.json();

        setfilmDataReceived(true);
        setFilm(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchFilmData();
  }, []);

  function handleBookmark() {
    setFilm((previous) => {
      return { ...previous, is_bookmarked: !previous.is_bookmarked };
    });
  }

  useEffect(() => {
    if (filmDataReceived && film && film.characters.length > 0) {
      film?.characters?.forEach(async (element) => {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await fetch(element);
          const data = await result.json();
          setCharacters((prevState) => {
            if (prevState.includes(data.name)) return prevState;
            return [
              ...prevState,
              {
                name: data.name,
                url: data.url,
              },
            ];
          });
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      });
    }
  }, [filmDataReceived]);

  return (
    <Container fluid>
      {isError && (
        <Row>
          <Col>
            <p>Something went wrong ...</p>
          </Col>
        </Row>
      )}
      {isLoading ? (
        <Row>
          <Col>
            <p>Loading.... ...</p>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className md={8}>
            <Row>
              <Col>
                <div className="container-infos p-2 mb-2 ">
                  <div className="d-flex justify-content-between">
                    <h1>{film.title}</h1>
                    <Button onClick={() => handleBookmark(film.title)}>
                      {film.is_bookmarked ? (
                        <i className="bi bi-star-fill"></i>
                      ) : (
                        <i className="bi bi-star"></i>
                      )}
                    </Button>
                  </div>
                  <p>
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
                  {isLoading ? (
                    <span>Loading...</span>
                  ) : (
                    <CharactersList characters={characters} />
                  )}
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <img style={{ width: "100%" }}
              alt={`poster of ${film.title}`}
              src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Film;
