import React from "react";
import { Container } from "react-bootstrap";
import yoda from "../images/yoda.png";

const Footer = () => {
  return (
    <Container className=" d-flex justify-content-center text-center mt-5 ">
      <p>
        Made with the Force by{" "}
        <a href="https://www.linkedin.com/in/raquel-magnani-pinheiro/">
          Raquel Magnani Pinheiro
        </a>
        !
        <br />
        Hire me, you must...{" "}
        <img src={yoda} alt="Yoda icon" style={{ width: "2rem" }} />
      </p>
    </Container>
  );
};

export default Footer;
