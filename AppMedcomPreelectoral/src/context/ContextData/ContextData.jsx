import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const ContextData = React.createContext();

export function UseSelectData() {
  return useContext(ContextData);
}

export function SelectDataProvider({ children }) {
  const [dataPrueba, setDataPrueba] = useState([]);

  const value = {
    dataPrueba,
    setDataPrueba,
  };

  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
}

SelectDataProvider.propTypes = {
  children: PropTypes.node
};
