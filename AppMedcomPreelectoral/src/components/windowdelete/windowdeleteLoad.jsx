import React from "react";
import PropTypes from "prop-types";
import { WindowDelete } from "./windowdelete";
import { DeleteData } from "../../apis/DeleteCandidato";

export const WindowDeleteLoad = ({
  data,
  selectIdDelete,
  setMostrarDelete,
}) => {
  const eliminarCandidato = async () => {
    const deleteCandidatos = data
      .filter((candidato) => candidato.idgeneral === selectIdDelete)
      .map((item) => item.corporacion)
      .toString()
    console.log(deleteCandidatos);
    //setCandidatos(nuevosCandidatos);
    const deleteData = {
      corporacion: deleteCandidatos.toUpperCase(),
      selectId: selectIdDelete,
    };
    await DeleteData(deleteData);
    window.location.reload();
  };

  return (
    <WindowDelete
      eliminarCandidato={eliminarCandidato}
      setMostrarDelete={setMostrarDelete}
    />
  );
};

WindowDeleteLoad.propTypes = {
  data: PropTypes.array.isRequired,
  selectIdDelete: PropTypes.number.isRequired,
  setMostrarDelete: PropTypes.func.isRequired,
};
