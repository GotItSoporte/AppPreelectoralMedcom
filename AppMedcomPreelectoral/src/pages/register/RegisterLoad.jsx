import React, { useEffect, useState } from "react";
import { Register } from "./Register";
import fetchApiData from "../../apis/ReadDataSql";

export const RegisterLoad = () => {
  const [selectedOption, setSelectedOption] = useState("PRESIDENTES");
  const [listCorporacion] = useState(["PRESIDENTES", "ALCALDES", "DIPUTADOS"]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchApiData(selectedOption);
      setData(apiData);
    };
    fetchData();
  }, [selectedOption]);

  return (
    <Register
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      listCorporacion={listCorporacion}
      mostrarFormulario={mostrarFormulario}
      setMostrarFormulario={setMostrarFormulario}
      data={data}
    />
  );
};
