import React from "react";
import PropTypes from "prop-types";
import { Card } from "./Card";

export const CardLoad = ({ name, nameButton, rute }) => {
  return <Card name={name} nameButton={nameButton} rute={rute} />;
};

CardLoad.propTypes = {
  name: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
  nameButton: PropTypes.string.isRequired,
};
