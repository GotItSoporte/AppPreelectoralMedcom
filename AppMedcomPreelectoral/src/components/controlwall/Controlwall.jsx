import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../components";
export const ControlWall = ({ Entrada }) => {
  return (
    <button className="flex w-fit mx-auto" onClick={()=>Entrada()}>
      <Button name="Entrada" type="Principal" rute="" />
    </button>
  );
};

ControlWall.propTypes = {
  Entrada: PropTypes.func.isRequired,
};
