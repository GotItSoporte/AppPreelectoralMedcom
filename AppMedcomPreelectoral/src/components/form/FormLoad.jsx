import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import PropTypes from "prop-types";
import { SendInfo } from "../../apis/SendFileForm";
import fetchApiData from "../../apis/ReadDataSql";

export const FormLoad = ({ setMostrar, mostrarFormulario }) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");

  //Seleccion
  const [datarefPosicion, setDatarefPosicion] = useState([]);
  const [selectedPosicion, setSelectedPosicion] = useState("Posicion");
  const [selectedCorporacion, setSelectedCorporacion] =
    useState("Corporacion...");
  const [selectedPartido, setSelectedPartido] = useState("1º Bandera...");
  const [selectedPartido2, setSelectedPartido2] = useState("2º Bandera...");
  const [selectedPartido3, setSelectedPartido3] = useState("3º Bandera...");
  const [selectedPartido4, setSelectedPartido4] = useState("4º Bandera...");

  const [selectedProvincia, setSelectedProvincia] = useState("Provincia...");
  const [selectedDistrito, setSelectedDistrito] = useState("Distrito...");
  const [selectedCircuito, setSelectedCircuito] = useState("Circuito...");

  //Listas
  const [listPosicion] = useState({
    PRESIDENTE: ["1", "2", "3", "4", "5", "6", "7", "8"],
    ALCALDES: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    DIPUTADOS: {
      "1-1": 2,
      "2-1": 2,
      "2-2": 1,
      "2-3": 1,
      "2-4": 1,
      "3-1": 4,
      "3-2": 1,
      "4-1": 3,
      "4-2": 1,
      "4-3": 2,
      "4-4": 1,
      "4-5": 1,
      "4-6": 1,
      "5-1": 1,
      "5-2": 1,
      "6-1": 1,
      "6-2": 1,
      "6-3": 1,
      "7-1": 1,
      "7-2": 1,
      "8-1": 1,
      "8-2": 7,
      "8-3": 5,
      "8-4": 5,
      "8-5": 3,
      "8-6": 4,
      "9-1": 2,
      "9-2": 1,
      "9-3": 1,
      "9-4": 1,
      "10-1": 1,
      "10-2": 1,
      "12-1": 1,
      "12-2": 1,
      "12-3": 1,
      "13-1": 3,
      "13-2": 1,
      "13-3": 1,
      "13-4": 3,
    },
  });
  const [selectedListPosicion, setSelectedListPosicion] = useState([]);

  const [listCorporacion] = useState(["PRESIDENTE", "ALCALDES", "DIPUTADOS"]);
  const [listPartido] = useState([
    "PRD",
    "PP",
    "MOL",
    "PAN",
    "CD",
    "ALIANZA",
    "RM",
    "PAIS",
    "MOCA",
    "LIBRE POST.",
    "LIBRE POST 2.",
    "LIBRE POST 3.",
  ]);
  const partidoIdMap = {
    PRD: 9,
    PP: 8,
    MOL: 3,
    PAN: 7,
    CD: 1,
    PA: 5,
    RM: 10,
    PAIS: 6,   
    MOCA: 4,
    "LIBRE POST.": 2,
    "LIBRE POST 2.": 2,
    "LIBRE POST 3.": 2,

  };

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
    "KUNA YALA"
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
    HERRERA: ["6-1", "6-2", "6-3"],
    "LOS SANTOS": ["7-1", "7-2"],
    PANAMÁ: ["8-1", "8-2", "8-3", "8-4", "8-5", "8-6"],
    VERAGUAS: ["9-1", "9-2", "9-3", "9-4"],
    "KUNA YALA":["10-1","10-2"],
    "NGÖBE BUGLÉ": ["12-1", "12-2", "12-3"],
    "PANAMÁ OESTE": ["13-1", "13-2", "13-3", "13-4"],
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    const data = {
      selectedName: selectedName.toUpperCase(),
      selectedId: selectedId,
      selectedPosicion: parseInt(selectedPosicion),
      selectedPartido: selectedPartido,
      selectedIdPartido: partidoIdMap[selectedPartido],
      selectedPartido2:
        selectedPartido2 === "2º Bandera..." ? "NO APLICA" : selectedPartido2,
      selectedIdPartido2:
        selectedPartido2 === "2º Bandera..."
          ? "0"
          : partidoIdMap[selectedPartido2],
      selectedPartido3:
        selectedPartido3 === "3º Bandera..." ? "NO APLICA" : selectedPartido3,
      selectedIdPartido3:
        selectedPartido3 === "3º Bandera..."
          ? "0"
          : partidoIdMap[selectedPartido3],
      selectedPartido4:
        selectedPartido4 === "4º Bandera..." ? "NO APLICA" : selectedPartido4,
      selectedIdPartido4:
        selectedPartido4 === "4º Bandera..."
          ? "0"
          : partidoIdMap[selectedPartido4],
      selectedProvincia: selectedProvincia,
      selectedDistrito: selectedDistrito,
      selectedCircuito: selectedCircuito,
      selectedCorporacion: selectedCorporacion,
    };
    console.log({ data });
    await SendInfo(data);
    setMostrar(false);
  };

  useEffect(() => {
    setSelectedProvincia("Provincia...");
    setSelectedDistrito("Distrito...");
    setSelectedCircuito("Circuito...");

    if (selectedCorporacion === "PRESIDENTE") {
      setSelectedProvincia("NACIONAL");
    }
  }, [selectedCorporacion]);

  useEffect(() => {
    setSelectedCircuito("Circuito...");
    setSelectedDistrito("Distrito...");
  }, [selectedProvincia]);

  useEffect(() => {
    setSelectedName(""),
    setSelectedId(""),
    //setSelectedProvincia("Provincia...");
    //setSelectedCircuito("Circuito...");
    //setSelectedDistrito("Distrito...");
    setSelectedPartido("1º Bandera...");
    setSelectedPartido2("2º Bandera...");
    setSelectedPartido3("3º Bandera...");
    setSelectedPartido4("4º Bandera...");
    setSelectedPosicion("Posicion");
    //setSelectedCorporacion("Corporacion...");
    setSelectedListPosicion([]);
  }, [mostrarFormulario]);

  useEffect(() => {
    if (selectedCorporacion !== "Corporacion...") {
      const fetchData = async () => {
        const apiData = await fetchApiData(selectedCorporacion);
        setDatarefPosicion(apiData);
      };
      fetchData();
    }
  }, [selectedCorporacion, selectedListPosicion]);

  useEffect(() => {
    if (selectedCorporacion !== "Corporacion...") {
      if (selectedCorporacion === "PRESIDENTE") {
        const dataComparada = datarefPosicion.map((item) => item.posicion);
        const valoresUnicos = listPosicion[selectedCorporacion].filter(
          (valor) => !dataComparada.map(String).includes(valor)
        );
        setSelectedListPosicion(
          valoresUnicos.length > 0
            ? valoresUnicos
            : ["No hay posiciones libres"]
        );
      } else if (selectedCorporacion === "ALCALDES") {
        const dataComparadaDistrito = datarefPosicion
          .filter((item) => item.distrito === selectedDistrito)
          .map((item) => item.posicion);
        const valoresUnicos = listPosicion[selectedCorporacion].filter(
          (valor) => !dataComparadaDistrito.map(String).includes(valor)
        );
        setSelectedListPosicion(
          selectedDistrito !== "Distrito..."
            ? valoresUnicos.length > 0
              ? valoresUnicos
              : ["No hay posiciones libres"]
            : []
        );
      } else if (selectedCorporacion === "DIPUTADOS") {
        const dataComparadaDiputados = datarefPosicion
          .filter(
            (item) =>
              item.circuito === selectedCircuito &&
              item.partido === selectedPartido
          )
          .map((item) => item.posicion);
        console.log({ dataComparadaDiputados });
        const cantidadCurules = Array.from(
          { length: listPosicion[selectedCorporacion][selectedCircuito] },
          (_, index) => (index + 1).toString()
        );
        const valoresUnicos = cantidadCurules.filter(
          (valor) => !dataComparadaDiputados.map(String).includes(valor)
        );
        setSelectedListPosicion(
          selectedCircuito !== "Circuito..." &&
            selectedPartido !== "1º Bandera..."
            ? valoresUnicos.length > 0
              ? valoresUnicos
              : ["No hay posiciones libres"]
            : []
        );
      }
    }
  }, [
    datarefPosicion,
    selectedCorporacion,
    selectedDistrito,
    selectedCircuito,
    selectedPartido,
  ]);

  return (
    <Form
      selectedName={selectedName}
      setSelectedName={setSelectedName}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      selectedPosicion={selectedPosicion}
      setSelectedPosicion={setSelectedPosicion}
      listPosicion={listPosicion}
      selectedListPosicion={selectedListPosicion}
      selectedCorporacion={selectedCorporacion}
      setSelectedCorporacion={setSelectedCorporacion}
      listCorporacion={listCorporacion}
      selectedPartido={selectedPartido}
      setSelectedPartido={setSelectedPartido}
      selectedPartido2={selectedPartido2}
      setSelectedPartido2={setSelectedPartido2}
      selectedPartido3={selectedPartido3}
      setSelectedPartido3={setSelectedPartido3}
      selectedPartido4={selectedPartido4}
      setSelectedPartido4={setSelectedPartido4}
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
  mostrarFormulario: PropTypes.bool.isRequired,
};
