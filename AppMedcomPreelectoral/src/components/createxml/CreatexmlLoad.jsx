import React, { useState } from "react";
import { CreateFile } from "../../apis/CreateFileXml";
import xmlbuilder from "xmlbuilder";
import PropTypes from "prop-types";
import { Createxml } from "./Createxml";

export const CreatexmlLoad = ({ data }) => {
  const [aviso, setAviso] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const curules = {
    "1-1": "CURULES: 2",
    "2-1": "CURULES: 2",
    "2-2": "CURULES: 1",
    "2-3": "CURULES: 1",
    "2-4": "CURULES: 1",
    "3-1": "CURULES: 4",
    "3-2": "CURULES: 1",
    "4-1": "CURULES: 3",
    "4-2": "CURULES: 1",
    "4-3": "CURULES: 2",
    "4-4": "CURULES: 1",
    "4-5": "CURULES: 1",
    "4-6": "CURULES: 1",
    "5-1": "CURULES: 1",
    "5-2": "CURULES: 1",
    "6-1": "CURULES: 1",
    "6-2": "CURULES: 1",
    "6-3": "CURULES: 1",
    "7-1": "CURULES: 1",
    "7-2": "CURULES: 1",
    "8-1": "CURULES: 1",
    "8-2": "CURULES: 7",
    "8-3": "CURULES: 5",
    "8-4": "CURULES: 5",
    "8-5": "CURULES: 3",
    "8-6": "CURULES: 4",
    "9-1": "CURULES: 2",
    "9-2": "CURULES: 1",
    "9-3": "CURULES: 1",
    "9-4": "CURULES: 1",
    "10-1": "CURULES: 1",
    "10-2": "CURULES: 1",
    "12-1": "CURULES: 1",
    "12-2": "CURULES: 1",
    "12-3": "CURULES: 1",
    "13-1": "CURULES: 3",
    "13-2": "CURULES: 1",
    "13-3": "CURULES: 1",
    "13-4": "CURULES: 3",
  };

  const partidoCompleto = {
    "CD": "CAMBIO DEMOCRÁTICO",
    "LIBRE POST.": "LIBRE POSTULACIÓN",
    "MOL": "MOLIRENA",
    "MOCA":"MOVIMIENTO OTRO CAMINO",
    "PA":"PARTIDO ALIANZA",
    "PAIS": "PAÍS",
    "PAN": "PARTIDO PANAMEÑISTA",
    "PP": "PARTIDO POPULAR",
    "PRD": "PARTIDO REVOLUCIONARIO DEMOCRÁTICO",
    "RM": "REALIZANDO METAS",
  };
  console.log({data})

  async function CreateFileXml() {
    const tickerfeed = xmlbuilder.create("data");
    data.forEach((dataSelect) => {
      const element = tickerfeed.ele("element");
      element.ele("posicion", dataSelect.posicion);
      element.ele("nombre", dataSelect.nombre);
      element.ele("id", dataSelect.id);
      //element.ele("partido", dataSelect.corporacion==="DIPUTADOS"?dataSelect.partidosec:dataSelect.partido);
      //element.ele("idpartido",dataSelect.corporacion==="DIPUTADOS"?dataSelect.idpartidosec:dataSelect.idpartido);
      element.ele("partido", dataSelect.partido);
      element.ele("idpartido",dataSelect.idpartido);
      element.ele("partido2", dataSelect.partido2);
      element.ele("idpartido2",dataSelect.idpartido2);
      element.ele("partido3", dataSelect.partido3);
      element.ele("idpartido3",dataSelect.idpartido3);
      element.ele("partido4", dataSelect.partido4?dataSelect.partido4:'NO APLICA');
      element.ele("idpartido4",dataSelect.idpartido4?dataSelect.idpartido4:0);
    

      if(dataSelect.corporacion!=="PRESIDENTE"){
      element.ele("provincia", dataSelect.provincia);
      }
      if (dataSelect.distrito) {
        element.ele("distrito", dataSelect.distrito);
      }
      if (dataSelect.circuito) {
        element.ele("circuito", "CIRCUITO " + dataSelect.circuito);
        element.ele(
          "curules",
          curules[dataSelect.circuito] || ""
        );
      }
      if(dataSelect.corporacion==="DIPUTADOS"){
        element.ele("partidocompleto", partidoCompleto[dataSelect.partido]);
      }
      element.ele("corporacion", dataSelect.corporacion);
    });
    const xml = tickerfeed.end({ pretty: true }).toString();
    await CreateFile(xml);

    setAviso(true);
    await delay(2000);
    setAviso(false);
  }

  return <Createxml CreateFileXml={CreateFileXml} aviso={aviso} />;
};

CreatexmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
};
