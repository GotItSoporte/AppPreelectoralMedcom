import React from "react";
import PropTypes from "prop-types";
import { ControlWall } from "./Controlwall";
import { SendInfoWall } from "../../apis/SendInfoViz";

export const ControlWallLoad = ({ data, setMostrarNavbar }) => {
 
  const Entrada = async () => {
    console.log({data})
    setMostrarNavbar(true);
    const formattedData = data.map((entry, index) =>
  `Data[${index}]={{${Object.entries(entry)
    .map(([key, value]) => `${key}=${value}`)
    .join(';')}}}`
).join(';');

    const WALLMessage = `${formattedData};corporacion='PRESIDENTE';`;

    const WALL_UDPMessage = {
      data: WALLMessage,
    };
    SendInfoWall(WALL_UDPMessage);
  };

  return <ControlWall Entrada={Entrada}/>;
};

ControlWallLoad.propTypes = {
  data: PropTypes.array.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
};
