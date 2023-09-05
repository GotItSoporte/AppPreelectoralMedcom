import React, { useState } from "react";
import PropTypes from "prop-types";
import { Verificacion } from "./Verificacion";
import { useNavigate } from "react-router-dom";

export const VerificacionLoad = ({ setMostrarVerificacion }) => {
  const [nameValidacion, setNameValidacion] = useState("");
  const [Error, setError] = useState(false);
  const navigate = useNavigate();

  const checkValidacion = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (nameValidacion === "medcomvoto24") {
      navigate("/Register", { state: { myVariable: nameValidacion } });
    } else {
      setError(true);
      setNameValidacion("");
    }
  };

  return (
    <Verificacion
      setMostrarVerificacion={setMostrarVerificacion}
      checkValidacion={checkValidacion}
      nameValidacion={nameValidacion}
      setNameValidacion={setNameValidacion}
      Error={Error}
    />
  );
};

VerificacionLoad.propTypes = {
  setMostrarVerificacion: PropTypes.func.isRequired,
};
