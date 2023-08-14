import React, { useEffect, useState } from "react";
import { Register } from "./Register";
import fetchApiData from "../../apis/ReadDataSql";

export const RegisterLoad = () => {
  const [selectedOption, setSelectedOption] = useState("PRESIDENTES");
  const [selectedProvincia, setSelectedProvincia] = useState("Provincia...");
  const [selectedDistrito, setSelectedDistrito] = useState("Distrito...");
  const [selectedCircuito, setSelectedCircuito] = useState("Circuito...");
  const [selectedPartido, setSelectedPartido] = useState("Partido");
  const [listCorporacion] = useState(["PRESIDENTES", "ALCALDES", "DIPUTADOS"]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [data, setData] = useState([]);
  const [dataSend, setDataSend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchApiData(selectedOption);
      setData(apiData);
      setDataSend(apiData);
    };

    fetchData();
  }, [selectedOption]);

  useEffect(() => {
    if (selectedDistrito !== "Distrito...") {
      setDataSend(data.filter((item) => item.distrito === selectedDistrito));
    }
    if (selectedProvincia !== "Provincia...") {
      setDataSend(data.filter((item) => item.provincia === selectedProvincia));
    }

  }, [selectedProvincia, selectedDistrito]);

  return (
    <Register
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      listCorporacion={listCorporacion}
      selectedProvincia={selectedProvincia}
      setSelectedProvincia={setSelectedProvincia}
      selectedDistrito={selectedDistrito}
      setSelectedDistrito={setSelectedDistrito}
      selectedCircuito={selectedCircuito}
      setSelectedCircuito={setSelectedCircuito}
      selectedPartido={selectedPartido}
      setSelectedPartido={setSelectedPartido}
      mostrarFormulario={mostrarFormulario}
      setMostrarFormulario={setMostrarFormulario}
      data={data}
      dataSend={dataSend}
    />
  );
};
