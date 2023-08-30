import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../components";
export const ControlWall = ({
  Entrada,
  Continue,
  Salida,
  SalidaForzada,
  botonActivado,
  cantidad,
  delayButton,
}) => {
  return (
    <div className="space-x-10 flex">
      {botonActivado === 1 ? (
        <button
          className={`flex w-fit mx-auto ${
            delayButton ? "opacity-100" : "opacity-30"
          } `}
          onClick={() => (delayButton ? Entrada() : null)}
        >
          <Button name="Entrada" type="Principal" rute="" />
        </button>
      ) : botonActivado === 2 && cantidad > 0 ? (
        <button
          className={`flex w-fit mx-auto ${
            delayButton ? "opacity-100" : "opacity-30"
          } `}
          onClick={() => (delayButton ? Continue() : null)}
        >
          <Button name={`Continue ${cantidad}`} type="Principal" rute="" />
        </button>
      ) : botonActivado === 3 ? (
        <button
          className={`flex w-fit mx-auto ${
            delayButton ? "opacity-100" : "opacity-30"
          } `}
          onClick={() => (delayButton ? Salida() : null)}
        >
          <Button name="Salida" type="Principal" rute="" />
        </button>
      ) : null}

      <button className="flex w-fit mx-auto" onClick={() => SalidaForzada()}>
        <Button name="SalidaForzada" type="Principal" rute="" />
      </button>
    </div>
  );
};

ControlWall.propTypes = {
  Entrada: PropTypes.func.isRequired,
  Continue: PropTypes.func.isRequired,
  Salida: PropTypes.func.isRequired,
  SalidaForzada: PropTypes.func.isRequired,
  botonActivado: PropTypes.number.isRequired,
  cantidad: PropTypes.number.isRequired,
  delayButton: PropTypes.bool.isRequired,
};
