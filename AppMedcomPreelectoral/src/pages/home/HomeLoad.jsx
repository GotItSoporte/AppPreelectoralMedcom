import React, { useState } from "react";
import { Home } from "./Home";

export const HomeLoad = () => {

  const [mostrarVerificacion,setMostrarVerificacion] = useState(false);

  return <Home mostrarVerificacion={mostrarVerificacion}setMostrarVerificacion={setMostrarVerificacion}/>;
};
