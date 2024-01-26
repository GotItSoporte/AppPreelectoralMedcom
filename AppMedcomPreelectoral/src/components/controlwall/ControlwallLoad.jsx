import React, { useState } from "react";
import PropTypes from "prop-types";
import { ControlWall } from "./Controlwall";
import { SendInfoWall } from "../../apis/SendInfoViz";

export const ControlWallLoad = ({ data, setMostrarNavbar,setNavbarActivado }) => {
  const [botonActivado, setBotonActivado] = useState(1);
  const [cantidad, setCantidad] = useState(0);
  const [delayButton, setDelayButton] = useState(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const curules = {
    "1-1": "CURULES: 2",
    "2-1": "CURULES: 2",
    "2-2": "CURULES: 1",
    "2-3": "CURULES: 1",
    "2-4": "CURULES: 1",
    "3-1": "CURULES: 4",
    "3-2": "CURULES: 1",
    "4-1": "CURULES: 3",
    "4-2": "CURULES: 1",
    "4-3": "CURULES: 2",
    "4-4": "CURULES: 1",
    "4-5": "CURULES: 1",
    "4-6": "CURULES: 1",
    "5-1": "CURULES: 1",
    "5-2": "CURULES: 1",
    "6-1": "CURULES: 1",
    "6-2": "CURULES: 1",
    "6-3": "CURULES: 1",
    "7-1": "CURULES: 1",
    "7-2": "CURULES: 1",
    "8-1": "CURULES: 1",
    "8-2": "CURULES: 7",
    "8-3": "CURULES: 5",
    "8-4": "CURULES: 5",
    "8-5": "CURULES: 3",
    "8-6": "CURULES: 4",
    "9-1": "CURULES: 2",
    "9-2": "CURULES: 1",
    "9-3": "CURULES: 1",
    "9-4": "CURULES: 1",
    "10-1": "CURULES: 1",
    "10-2": "CURULES: 1",
    "12-1": "CURULES: 1",
    "12-2": "CURULES: 1",
    "12-3": "CURULES: 1",
    "13-1": "CURULES: 3",
    "13-2": "CURULES: 1",
    "13-3": "CURULES: 1",
    "13-4": "CURULES: 3",
  };

  const partidoCompleto = {
    "CD": "CAMBIO DEMOCRÁTICO",
    "LIBRE POST.": "LIBRE POSTULACIÓN",
    "LIBRE POST 2.": "LIBRE POSTULACIÓN 2",
    "LIBRE POST 3.": "LIBRE POSTULACIÓN 3",
    "MOL": "MOLIRENA",
    "MOCA":"MOVIMIENTO OTRO CAMINO",
    "PA":"PARTIDO ALIANZA",
    "PAIS": "PAÍS",
    "PAN": "PARTIDO PANAMEÑISTA",
    "PP": "PARTIDO POPULAR",
    "PRD": "PARTIDO REVOLUCIONARIO DEMOCRÁTICO",
    "RM": "REALIZANDO METAS",
  };


  const Entrada = async () => {
    setMostrarNavbar(false);
    setNavbarActivado(false);
    const formattedData = data
      .map(
        (entry, index) =>
          `Data[${index}]={{${Object.entries(entry)
            .map(([key, value]) => `${key}=${value}`)
            .join(";")}}}`
      )
      .join(";");
    const WALLMessage = `${formattedData};corporacion=""PRESIDENTE"";EntradaDataWALL=1;Curules=${curules[data[0].circuito]};PartidoCompleto=${partidoCompleto[data[0].partido]};READER_NUM_RECORDS=${data.length}`;

    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
    setCantidad(data.length);
    setDelayButton(false);
    setBotonActivado(2);
    await delay(7000);

    setDelayButton(true);
  };

 
  const Continue = async () => {
    const WALLMessage = "ContinueDataWALL=1";
    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
    setDelayButton(false);
    setCantidad(cantidad - 1);
    if (cantidad === 1) {
      setBotonActivado(3);
    }
    await delay(3000);
    setDelayButton(true);

  };

  const Salida = async () => {
    const WALLMessage = "SalidaDataWALL=1";
    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
    setDelayButton(false);
    setMostrarNavbar(true);
    setNavbarActivado(true);
    await delay(5000);
    setDelayButton(true);
    setBotonActivado(1);

  };

  const SalidaForzada = async () => {
    const WALLMessage = "SalidaTotalDataWALL=1";
    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
    setDelayButton(false);
    setBotonActivado(1);
    setMostrarNavbar(true);
    setNavbarActivado(true);
    setCantidad(0);
    await delay(5000);
    setDelayButton(true);

  };
  

  return (
    <ControlWall
      Entrada={Entrada}
      Continue={Continue}
      Salida={Salida}
      SalidaForzada={SalidaForzada}
      botonActivado={botonActivado}
      cantidad={cantidad}
      delayButton={delayButton}
    />
  );
};

ControlWallLoad.propTypes = {
  data: PropTypes.array.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  setNavbarActivado: PropTypes.func.isRequired,
};
