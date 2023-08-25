import React, { useState } from "react";
import PropTypes from "prop-types";
import { ControlWall } from "./Controlwall";
import { SendInfoWall } from "../../apis/SendInfoViz";

export const ControlWallLoad = ({ data, setMostrarNavbar }) => {
  const [botonActivado, setBotonActivado] = useState(1);
  const [cantidad, setCantidad] = useState(0);
  const [delayButton, setDelayButton] = useState(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const Entrada = async () => {
    console.log({ data });
    setMostrarNavbar(true);
    const formattedData = data
      .map(
        (entry, index) =>
          `Data[${index}]={{${Object.entries(entry)
            .map(([key, value]) => `${key}=${value}`)
            .join(";")}}}`
      )
      .join(";");

    const WALLMessage = `${formattedData};corporacion='PRESIDENTE';`;

    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
    setCantidad(data.length);
    setDelayButton(false);
    await delay(1000);
    setBotonActivado(2);
    setDelayButton(true);
  };

  console.log({ cantidad });
  const Continue = async () => {
    const WALLMessage = "ContinueDataWALL=1";
    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
    setDelayButton(false);
    await delay(1000);
    setDelayButton(true);
    setCantidad(cantidad - 1);
    if (cantidad === 1) {
      setBotonActivado(3);
    }
  };

  const Salida = async () => {
    const WALLMessage = "SalidaDataWALL=1";
    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
    setDelayButton(false);
    await delay(1000);
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
    await delay(1000);
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
};
