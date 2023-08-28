import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { WindowEdit } from "./windowedit";

export const WindowEditLoad = ({
  data,
  selectIdDelete,
  setMostrarEdit,
  mostrarEdit,
}) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    console.log("entro edit");
  };

  useEffect(() => {
    setSelectedName(
      data
        .filter((candidato) => candidato.idgeneral === selectIdDelete)
        .map((item) => item.nombre)
        .toString()
    );
    setSelectedId(
      data
        .filter((candidato) => candidato.idgeneral === selectIdDelete)
        .map((item) => item.id)
        .toString()
    );
  }, [selectIdDelete, mostrarEdit]);

  return (
    <WindowEdit
      handleSubmit={handleSubmit}
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      selectIdDelete={selectIdDelete}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      setMostrarEdit={setMostrarEdit}
    />
  );
};

WindowEditLoad.propTypes = {
  data: PropTypes.array.isRequired,
  mostrarEdit: PropTypes.bool.isRequired,
  setMostrarEdit: PropTypes.func.isRequired,
  selectIdDelete: PropTypes.number.isRequired,
};
