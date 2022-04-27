import React from "react";
import { useParams } from "react-router-dom";

const Film = () => {
  const params = useParams();
  console.log("PARAMS", params);
  return <h1>Pagina de filme</h1>;
};
export default Film;
