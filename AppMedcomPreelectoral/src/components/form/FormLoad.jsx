import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import PropTypes from "prop-types";
import { SendInfo } from "../../apis/SendFileForm";

export const FormLoad = ({ setMostrar }) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  //Seleccion
  const [selectedPosicion, setSelectedPosicion] = useState("posición...");
  const [selectedCorporacion, setSelectedCorporacion] =
    useState("Corporacion...");
  const [selectedPartido, setSelectedPartido] = useState("Partido...");
  const [selectedPartidoSec, setSelectedPartidoSec] = useState(
    "Partido Secundario..."
  );
  const [selectedProvincia, setSelectedProvincia] = useState("Provincia...");
  const [selectedDistrito, setSelectedDistrito] = useState("Distrito...");
  const [selectedCircuito, setSelectedCircuito] = useState("Circuito...");

  //Listas
  const [listPosicion] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ]);
  const [listCorporacion] = useState(["PRESIDENTES", "ALCALDES", "DIPUTADOS"]);
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
  const [listProvincia] = useState([
    "NACIONAL",
    "BOCAS DEL TORO",
    "COCLÉ",
    "COLÓN",
    "CHIRIQUÍ",
    "DARIÉN",
    "EMBERÁ WOUNAAN",
    "HERRERA",
    "LOS SANTOS",
    "PANAMÁ",
    "PANAMÁ OESTE",
    "VERAGUAS",
    "NGÖBE BUGLÉ",
  ]);
  const [listDistrito] = useState({
    "BOCAS DEL TORO": [
      "BOCAS DEL TORO",
      "CHANGUINOLA",
      "CHIRIQUÍ GRANDE",
      "ALMIRANTE",
    ],
    COCLÉ: ["PENONOMÉ", "ANTÓN", "LA PINTADA", "NATÁ", "OLÁ", "AGUADULCE"],
    COLÓN: [
      "COLÓN",
      "CHAGRES",
      "DONOSO",
      "OMAR TORRIJOS HERRERA",
      "PORTOBELO",
      "SANTA ISABEL",
    ],
    CHIRIQUÍ: [
      "DAVID",
      "BARÚ",
      "BUGABA",
      "TIERRAS ALTAS",
      "ALANJE",
      "BOQUERÓN",
      "RENACIMIENTO",
      "BOQUETE",
      "DOLEGA",
      "GUALACA",
      "SAN FELIX",
      "SAN LORENZO",
      "REMEDIOS",
      "TOLÉ",
    ],
    DARIÉN: ["CHEPIGANA", "SANTA FE DE DARIEN", "PINOGANA"],
    "EMBERÁ WOUNAAN": ["SAMBÚ", "CÉMACO"],
    HERRERA: [
      "CHITRÉ",
      "LOS POZOS",
      "PARITA",
      "PESÉ",
      "LAS MINAS",
      "OCÚ",
      "SANTA MARÍA",
    ],
    "LOS SANTOS": [
      "GUARARÉ",
      "LAS TABLAS",
      "PEDASÍ",
      "POCRÍ",
      "LOS SANTOS",
      "MACARACAS",
      "TONOSÍ",
    ],
    PANAMÁ: ["BALBOA", "CHEPO", "CHIMÁN", "TABOGA", "SAN MIGUELITO", "PANAMÁ"],
    "PANAMÁ OESTE": [
      "ARRAIJÁN",
      "CAPIRA",
      "CHAME",
      "LA CHORRERA",
      "SAN CARLOS",
    ],
    VERAGUAS: [
      "ATALAYA",
      "CALOBRE",
      "CAÑAZAS",
      "LA MESA",
      "LAS PALMAS",
      "MARIATO",
      "MONTIJO",
      "RÍO DE JESÚS",
      "SAN FRANCISCO",
      "SANTA FE",
      "SANTIAGO",
      "SONÁ",
    ],
    "NGÖBE BUGLÉ": [
      "BESIKÓ",
      "JIRONDAI",
      "KANKINTÚ",
      "KUSAPÍN",
      "MIRONÓ",
      "MÜNA",
      "NOLE DUIMA",
      "ÑÜRÜM",
      "CALOVÉBORA",
    ],
  });
  const [listCircuito] = useState({
    "BOCAS DEL TORO": ["1-1"],
    COCLÉ: ["2-1", "2-2", "2-3", "2-4"],
    COLÓN: ["3-1", "3-2"],
    CHIRIQUÍ: ["4-1", "4-2", "4-3", "4-4", "4-5", "4-6"],
    DARIÉN: ["5-1", "5-2"],
    //"EMBERÁ WOUNAAN": ["6-1,6-2,6-3"],
    HERRERA: ["6-1","6-2", "6-3"],
    "LOS SANTOS": ["7-1", "7-2"],
    PANAMÁ: ["8-1", "8-2", "8-3", "8-4", "8-5", "8-6"],
    VERAGUAS: ["9-1", "9-2", "9-3", "9-4"],
    "NGÖBE BUGLÉ": ["12-1", "12-2", "12-3"],
    "PANAMÁ OESTE": ["13-1", "13-2", "13-3", "13-4"],
  });

  const handleSubmit = async () => {
    //e.preventDefault(); // Evita que la página se recargue
    console.log({
      selectedName,
      selectedId,
      selectedPosicion,
      selectedPartido,
      selectedCorporacion,
      selectedCircuito,
    });

    const data = {
      selectedName: selectedName.toUpperCase(),
      selectedId: selectedId,
      selectedPosicion: parseInt(selectedPosicion),
      selectedPartido: selectedPartido,
      selectedProvincia: selectedProvincia,
      selectedDistrito: selectedDistrito,
      selectedCircuito: selectedCircuito,
      selectedPartidoSec: selectedPartidoSec,
      selectedCorporacion: selectedCorporacion,
    };

    await SendInfo(data);
  };

  useEffect(() => {
    setSelectedProvincia("Provincia...");
    setSelectedDistrito("Distrito...");
    setSelectedCircuito("Circuito...");

    if(selectedCorporacion==="PRESIDENTES"){
        setSelectedProvincia("NACIONAL")
    }
  }, [selectedCorporacion]);

  useEffect(() => {
    setSelectedCircuito("Circuito...");
    setSelectedDistrito("Distrito...")
  }, [selectedProvincia]);

  return (
    <Form
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      selectedPosicion={selectedPosicion}
      setSelectedPosicion={setSelectedPosicion}
      listPosicion={listPosicion}
      selectedCorporacion={selectedCorporacion}
      setSelectedCorporacion={setSelectedCorporacion}
      listCorporacion={listCorporacion}
      selectedPartido={selectedPartido}
      setSelectedPartido={setSelectedPartido}
      selectedPartidoSec={selectedPartidoSec}
      setSelectedPartidoSec={setSelectedPartidoSec}
      listPartido={listPartido}
      selectedProvincia={selectedProvincia}
      setSelectedProvincia={setSelectedProvincia}
      listProvincia={listProvincia}
      selectedDistrito={selectedDistrito}
      listDistrito={listDistrito}
      setSelectedDistrito={setSelectedDistrito}
      selectedCircuito={selectedCircuito}
      setSelectedCircuito={setSelectedCircuito}
      listCircuito={listCircuito}
      setMostrarFormulario={setMostrar}
      handleSubmit={handleSubmit}
    />
  );
};

FormLoad.propTypes = {
  setMostrar: PropTypes.func.isRequired,
};
