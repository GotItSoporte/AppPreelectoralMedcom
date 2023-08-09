import React, { useState } from "react";
import { Register } from "./Register";

export const RegisterLoad = () => {
  const [selectedOption, setSelectedOption] = useState("Presidentes");
  const [listCorporacion] = useState(["Presidentes", "Alcaldes", "Diputados"]);

  const [mostrarFormulario,setMostrarFormulario] = useState(false); 
  return (
    <Register
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      listCorporacion={listCorporacion}
      mostrarFormulario={mostrarFormulario}
      setMostrarFormulario={setMostrarFormulario}
    />
  );
};


