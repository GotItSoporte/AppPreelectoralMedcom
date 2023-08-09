import React, { useState } from "react";
import { Form } from "./Form";
import PropTypes from "prop-types";
import { SendInfo } from "../../apis/SendFileForm";

export const FormLoad = ({ setMostrar }) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  //Seleccion
  const [selectedPosicion, setSelectedPosicion] = useState("posición...");
  const [selectedCorporacion, setSelectedCorporacion] =
    useState("Corporacion...");
  const [selectedPartido, setSelectedPartido] = useState("Partido...");
  const [selectedProvincia, setSelectedProvincia] = useState("Provincia...");
  const [selectedDistrito, setSelectedDistrito] = useState("Distrito...");
  const [selectedCircuito, setSelectedCircuito] = useState("Circuito...");
  const [selectedCurules, setSelectedCurules] = useState("Curules...");

  //Listas
  const [listPosicion] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const [listCorporacion] = useState(["PRESIDENTES", "ALCALDES", "DIPUTADOS"]);
  const [listPartido] = useState(["RM", "PRD", "CD", "PAM"]);
  const [listProvincia] = useState(["NACIONAL", "BOCAS DEL TORO", "COCLÉ"]);
  const [listDistrito] = useState(["PENONOMÉ", "COLÓN", "DAVID"]);
  const [listCircuito] = useState(["4-1", "4-2", "4-3"]);
  const [listCurules] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);

  const handleSubmit = async () => {
    //e.preventDefault(); // Evita que la página se recargue
    console.log({
      selectedName,
      selectedId,
      selectedPosicion,
      selectedPartido,
      selectedCorporacion,
      selectedCircuito,
    });

    const data = {
      selectedName: selectedName.toUpperCase(),
      selectedId: selectedId,
      selectedPosicion: parseInt(selectedPosicion),
      selectedPartido: selectedPartido,
      selectedProvincia: selectedProvincia,
      selectedDistrito: selectedDistrito,
      selectedCircuito: selectedCircuito,
      selectedCurules: parseInt(selectedCurules),
      selectedCorporacion: selectedCorporacion,
    };

    await SendInfo(data);
  };

  return (
    <Form
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      selectedPosicion={selectedPosicion}
      setSelectedPosicion={setSelectedPosicion}
      listPosicion={listPosicion}
      selectedCorporacion={selectedCorporacion}
      setSelectedCorporacion={setSelectedCorporacion}
      listCorporacion={listCorporacion}
      selectedPartido={selectedPartido}
      setSelectedPartido={setSelectedPartido}
      selectedProvincia={selectedProvincia}
      setSelectedProvincia={setSelectedProvincia}
      listProvincia={listProvincia}
      selectedDistrito={selectedDistrito}
      listDistrito={listDistrito}
      setSelectedDistrito={setSelectedDistrito}
      selectedCircuito={selectedCircuito}
      setSelectedCircuito={setSelectedCircuito}
      listCircuito={listCircuito}
      listPartido={listPartido}
      selectedCurules={selectedCurules}
      setSelectedCurules={setSelectedCurules}
      listCurules={listCurules}
      setMostrarFormulario={setMostrar}
      handleSubmit={handleSubmit}
    />
  );
};

FormLoad.propTypes = {
  setMostrar: PropTypes.func.isRequired,
};
