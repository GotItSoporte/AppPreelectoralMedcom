import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { WindowEdit } from "./windowedit";
import { EditData } from "../../apis/EditCandidato";


export const WindowEditLoad = ({
  data,
  selectIdDelete,
  setMostrarEdit,
  mostrarEdit,
}) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedPartido, setSelectedPartido] = useState("");
  const [selectedPartido2, setSelectedPartido2] = useState("");
  const [selectedPartido3, setSelectedPartido3] = useState("");

  const [listPartido] = useState([
    "CD",
    "LIBRE POST.",
    "MOL",
    "MOCA",
    "PA",
    "PAIS",
    "PAN",
    "PP",
    "PRD",
    "RM",
  ]);

  const partidoIdMap = {
    CD: 1,
    "LIBRE POST.": 2,
    MOL: 3,
    MOCA: 4,
    PA: 5,
    PAIS: 6,
    PAN: 7,
    PP: 8,
    PRD: 9,
    RM: 10,
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const deleteCandidatos = data
      .filter((candidato) => candidato.idgeneral === selectIdDelete)
      .map((item) => item.corporacion)
      .toString();

    const editData = {
      corporacion: deleteCandidatos.toUpperCase(),
      name: selectedName.toUpperCase(),
      id: selectedId,
      partido:selectedPartido,
      idpartido: partidoIdMap[selectedPartido],
      partido2:selectedPartido2,
      idpartido2: selectedPartido2 === "NO APLICA"? "0": partidoIdMap[selectedPartido2],
      partido3:selectedPartido3,
      idpartido3: selectedPartido3 === "NO APLICA"? "0": partidoIdMap[selectedPartido3],
      selectId: selectIdDelete,
    };

    await EditData(editData);
    setMostrarEdit(false);
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
    setSelectedPartido(
      data
        .filter((candidato) => candidato.idgeneral === selectIdDelete)
        .map((item) => item.partido)
        .toString()
    );
    setSelectedPartido2(
      data
        .filter((candidato) => candidato.idgeneral === selectIdDelete)
        .map((item) => item.partido2)
        .toString()
    );
    setSelectedPartido3(
      data
        .filter((candidato) => candidato.idgeneral === selectIdDelete)
        .map((item) => item.partido3)
        .toString()
    );



  }, [selectIdDelete, mostrarEdit]);

  return (
    <WindowEdit
      handleSubmit={handleSubmit}
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      selectedPartido={selectedPartido}
      setSelectedPartido={setSelectedPartido}
      selectedPartido2={selectedPartido2}
      setSelectedPartido2={setSelectedPartido2}
      selectedPartido3={selectedPartido3}
      setSelectedPartido3={setSelectedPartido3}
      setMostrarEdit={setMostrarEdit}
      listPartido={listPartido}
    />
  );
};

WindowEditLoad.propTypes = {
  data: PropTypes.array.isRequired,
  mostrarEdit: PropTypes.bool.isRequired,
  setMostrarEdit: PropTypes.func.isRequired,
  selectIdDelete: PropTypes.number.isRequired,
};
