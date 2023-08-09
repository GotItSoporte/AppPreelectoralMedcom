import React, { useContext } from "react";
import PropTypes from "prop-types";

const ContextFunctions = React.createContext();

export function UseSelectFunctions() {
  return useContext(ContextFunctions);
}

export function SelectFunctionsProvider({ children }) {
  const value = {};

  return (
    <ContextFunctions.Provider value={value}>
      {children}
    </ContextFunctions.Provider>
  );
}

SelectFunctionsProvider.propTypes = {
  children: PropTypes.node,
};
