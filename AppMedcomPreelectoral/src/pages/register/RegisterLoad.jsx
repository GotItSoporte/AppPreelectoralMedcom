import React, { useEffect, useState } from "react";
import { Register } from "./Register";
import fetchApiData from "../../apis/ReadDataSql";

export const RegisterLoad = () => {
  const [selectedOption, setSelectedOption] = useState("PRESIDENTE");
  const [selectedProvincia, setSelectedProvincia] = useState(
    "Todas las provincias"
  );
  const [selectedDistrito, setSelectedDistrito] = useState(
    "Todos los distritos"
  );
  const [selectedCircuito, setSelectedCircuito] = useState(
    "Todos los circuitos"
  );
  const [selectedPartido, setSelectedPartido] = useState("Todos los partidos");
  const [listCorporacion] = useState(["PRESIDENTE", "ALCALDES", "DIPUTADOS"]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarDelete, setMostrarDelete] = useState(false);
  const [selectIdDelete, setSelectIdDelete] = useState(0);
  const [mostrarEdit, setMostrarEdit] = useState(false);

  const [data, setData] = useState([]);
  const [dataSend, setDataSend] = useState([]);

  const [listProvincia, setListProvincia] = useState([]);
  const [listDistrito, setListDistrito] = useState([]);
  const [listCircuito, setListCircuito] = useState([]);
  const [listPartido, setListPartido] = useState([]);


  useEffect(() => {
    setListProvincia([
      "Todas las provincias",
      ...new Set(data.map((item) => item.provincia)),
    ]);
    setListDistrito([
      "Todos los distritos",
      ...new Set(
        data
          .filter((item) => item.provincia === selectedProvincia)
          .map((item) => item.distrito)
      ),
    ]);
    setListCircuito([
      "Todos los circuitos",
      ...new Set(
        data
          .filter((item) => item.provincia === selectedProvincia)
          .map((item) => item.circuito)
      ),
    ]);
    setListPartido(
      selectedOption !== "PRESIDENTE"
        ? [
            "Todos los partidos",
            ...new Set(
              data
                .filter((item) =>
                  item.distrito
                    ? item.distrito === selectedDistrito
                    : item.circuito
                    ? item.circuito === selectedCircuito
                    : null
                )
                .map((item) => item.partido)
            ),
          ]
        : ["Todos los partidos", ...new Set(data.map((item) => item.partido))]
    );
  }, [
    selectedOption,
    mostrarDelete,
    mostrarEdit,
    mostrarFormulario,
    data,
    selectedDistrito,
    selectedCircuito,
    selectedProvincia
   
  ]);
  
  useEffect(() => {
    if(mostrarDelete===false && mostrarEdit ===false){
    const fetchData = async () => {
      const apiData = await fetchApiData(selectedOption);
      setData(apiData);
      setDataSend(apiData);
    };
    fetchData();
    
    
     
    setSelectedProvincia("Todas las provincias");
    setSelectedDistrito("Todos los distritos");
    setSelectedCircuito("Todos los circuitos");
    setSelectedPartido("Todos los partidos");
    }
  }, [selectedOption, mostrarDelete, mostrarEdit, mostrarFormulario]);

  useEffect(() => {
    if (selectedProvincia !== "Todas las provincias") {
      setDataSend(data.filter((item) => item.provincia === selectedProvincia));
    } else {
      setDataSend(data);
    }

    setSelectedDistrito("Todos los distritos");
    setSelectedCircuito("Todos los circuitos");
    setSelectedPartido("Todos los partidos");
  }, [selectedProvincia]);

  useEffect(() => {
    if (selectedDistrito !== "Todos los distritos") {
      setDataSend(data.filter((item) => item.distrito === selectedDistrito));
    } else if(selectedProvincia!=="Todas las provincias") {
      setDataSend(data.filter((item) => item.provincia === selectedProvincia));
    } else { 
      setDataSend(data);
    }

    setSelectedPartido("Todos los partidos");
  }, [selectedDistrito]);

  useEffect(() => {
    if (selectedCircuito !== "Todos los circuitos") {
      setDataSend(data.filter((item) => item.circuito === selectedCircuito));
    } else if(selectedProvincia!=="Todas las provincias")  {
      setDataSend(data.filter((item)=>item.provincia === selectedProvincia));
    }else { 
      setDataSend(data);
    }
    setSelectedPartido("Todos los partidos")
  }, [selectedCircuito]);

  /*useEffect(() => {
    if (selectedCircuito !== "Todos los partidos") {
      setDataSend(data.filter((item) => item.partido === selectedPartido));
    } else {
      //setDataSend(data.filter((item)=>item.provincia === selectedProvincia));
    }
  }, [selectedPartido]);*/

  useEffect(() => {
    if (selectedPartido !== "Todos los partidos") {
      if (selectedOption === "ALCALDES") {
        setDataSend(
          data.filter(
            (item) =>
              item.partido === selectedPartido &&
              item.distrito === selectedDistrito
          )
        );
      } else if (selectedOption === "DIPUTADOS") {
        setDataSend(
          data.filter(
            (item) =>
              item.partido === selectedPartido &&
              item.circuito === selectedCircuito
          )
        );
      } else {
        setDataSend(data.filter((item) => item.partido === selectedPartido));
      }
    } else {
      if (
        selectedOption === "ALCALDES" &&
        selectedDistrito !== "Todos los distritos"
      ) {
        setDataSend(data.filter((item) => item.distrito === selectedDistrito));
      } else if (
        selectedOption === "DIPUTADOS" &&
        selectedCircuito !== "Todos los circuitos"
      ) {
        setDataSend(data.filter((item) => item.circuito === selectedCircuito));
      } else if (selectedProvincia!=="Todas las provincias") {
        setDataSend(data.filter((item) => item.provincia === selectedProvincia));
      } else {
      
        setDataSend(data);
      }

      //setDataSend(data.filter((item)=> item.circuito?item.circuito===selectedCircuito:item.distrito?item.distrito===selectedDistrito:item));
    }
  }, [selectedPartido, selectedOption]);

  return (
    <Register
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      listCorporacion={listCorporacion}
      selectedProvincia={selectedProvincia}
      setSelectedProvincia={setSelectedProvincia}
      selectedDistrito={selectedDistrito}
      setSelectedDistrito={setSelectedDistrito}
      selectedCircuito={selectedCircuito}
      setSelectedCircuito={setSelectedCircuito}
      selectedPartido={selectedPartido}
      setSelectedPartido={setSelectedPartido}
      mostrarFormulario={mostrarFormulario}
      setMostrarFormulario={setMostrarFormulario}
      data={data}
      dataSend={dataSend}
      //Delete
      mostrarDelete={mostrarDelete}
      setMostrarDelete={setMostrarDelete}
      selectIdDelete={selectIdDelete}
      setSelectIdDelete={setSelectIdDelete}
      //Edit
      mostrarEdit={mostrarEdit}
      setMostrarEdit={setMostrarEdit}
      //list
      listProvincia={listProvincia}
      listDistrito={listDistrito}
      listCircuito={listCircuito}
      listPartido={listPartido}
    />
  );
};
