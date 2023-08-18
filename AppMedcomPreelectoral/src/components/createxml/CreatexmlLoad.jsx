import React, { useState } from "react";
import { CreateFile } from "../../apis/CreateFileXml";
import xmlbuilder from "xmlbuilder";
import PropTypes from "prop-types";
import { Createxml } from "./Createxml";

export const CreatexmlLoad = ({ data }) => {
  const [aviso, setAviso] = useState(false);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const curules = {
    PAN: {
      "1-1": "CURULES 2",
      "2-1": "CURULES 2",
      "2-2": "CURULES 1",
      "2-3": "CURULES 1",
      "2-4": "CURULES 1",
      "3-1": "CURULES 4",
      "3-2": "CURULES 1",
      "4-1": "CURULES 3",
      "4-2": "CURULES 1",
      "4-3": "CURULES 2",
      "4-4": "CURULES 1",
      "4-5": "CURULES 1",
      "4-6": "CURULES 1",
      "5-1": "CURULES 1",
      "5-2": "CURULES 1",
      "6-1": "CURULES 1",
      "6-2": "CURULES 1",
      "6-3": "CURULES 1",
      "7-1": "CURULES 1",
      "7-2": "CURULES 1",
      "8-1": "CURULES 1",
      "8-2": "CURULES 7",
      "8-3": "CURULES 5",
      "8-4": "CURULES 5",
      "8-5": "CURULES 3",
      "8-6": "CURULES 4",
      "9-1": "CURULES 2",
      "9-2": "CURULES 1",
      "9-3": "CURULES 1",
      "9-4": "CURULES 1",
      "10-1": "CURULES 1",
      "10-2": "CURULES 1",
      "12-1": "CURULES 1",
      "12-2": "CURULES 1",
      "12-3": "CURULES 1",
      "13-1": "CURULES 3",
      "13-2": "CURULES 1",
      "13-3": "CURULES 1",
      "13-4": "CURULES 3",
    },
    CD: {
      "1-1": "CURULES 2",
      "2-1": "CURULES 2",
      "2-2": "CURULES 1",
      "2-3": "CURULES 1",
      "2-4": "CURULES 1",
      "3-1": "CURULES 4",
      "3-2": "CURULES 1",
      "4-1": "CURULES 3",
      "4-2": "CURULES 1",
      "4-3": "CURULES 2",
      "4-4": "CURULES 1",
      "4-5": "CURULES 1",
      "4-6": "CURULES 1",
      "5-1": "CURULES 1",
      "5-2": "CURULES 1",
      "6-1": "CURULES 1",
      "6-2": "CURULES 1",
      "6-3": "CURULES 1",
      "7-1": "CURULES 1",
      "7-2": "CURULES 1",
      "8-1": "CURULES 1",
      "8-2": "CURULES 7",
      "8-3": "CURULES 5",
      "8-4": "CURULES 5",
      "8-5": "CURULES 3",
      "8-6": "CURULES 4",
      "9-1": "CURULES 2",
      "9-2": "CURULES 1",
      "9-3": "CURULES 1",
      "9-4": "CURULES 1",
      "10-1": "CURULES 1",
      "10-2": "CURULES 1",
      "12-1": "CURULES 1",
      "12-2": "CURULES 1",
      "12-3": "CURULES 1",
      "13-1": "CURULES 3",
      "13-2": "CURULES 1",
      "13-3": "CURULES 1",
      "13-4": "CURULES 3",
    },
    RM: {
      "1-1": "CURULES 2",
      "2-1": "CURULES 2",
      "2-2": "CURULES 1",
      "2-3": "CURULES 1",
      "2-4": "CURULES 1",
      "3-1": "CURULES 4",
      "3-2": "CURULES 1",
      "4-1": "CURULES 3",
      "4-2": "CURULES 1",
      "4-3": "CURULES 2",
      "4-4": "CURULES 1",
      "4-5": "CURULES 1",
      "4-6": "CURULES 1",
      "5-1": "CURULES 1",
      "5-2": "CURULES 1",
      "6-1": "CURULES 1",
      "6-2": "CURULES 1",
      "6-3": "CURULES 1",
      "7-1": "CURULES 1",
      "7-2": "CURULES 1",
      "8-1": "CURULES 1",
      "8-2": "CURULES 7",
      "8-3": "CURULES 5",
      "8-4": "CURULES 5",
      "8-5": "CURULES 3",
      "8-6": "CURULES 4",
      "9-1": "CURULES 2",
      "9-2": "CURULES 1",
      "9-3": "CURULES 1",
      "9-4": "CURULES 1",
      "10-1": "CURULES 1",
      "10-2": "CURULES 1",
      "12-1": "CURULES 1",
      "12-2": "CURULES 1",
      "12-3": "CURULES 1",
      "13-1": "CURULES 3",
      "13-2": "CURULES 1",
      "13-3": "CURULES 1",
      "13-4": "CURULES 3",
    },
    PRD: {
      "1-1": "CURULES 2",
      "2-1": "CURULES 2",
      "2-2": "CURULES 1",
      "2-3": "CURULES 1",
      "2-4": "CURULES 1",
      "3-1": "CURULES 4",
      "3-2": "CURULES 1",
      "4-1": "CURULES 3",
      "4-2": "CURULES 1",
      "4-3": "CURULES 2",
      "4-4": "CURULES 1",
      "4-5": "CURULES 1",
      "4-6": "CURULES 1",
      "5-1": "CURULES 1",
      "5-2": "CURULES 1",
      "6-1": "CURULES 1",
      "6-2": "CURULES 1",
      "6-3": "CURULES 1",
      "7-1": "CURULES 1",
      "7-2": "CURULES 1",
      "8-1": "CURULES 1",
      "8-2": "CURULES 7",
      "8-3": "CURULES 5",
      "8-4": "CURULES 5",
      "8-5": "CURULES 3",
      "8-6": "CURULES 4",
      "9-1": "CURULES 2",
      "9-2": "CURULES 1",
      "9-3": "CURULES 1",
      "9-4": "CURULES 1",
      "10-1": "CURULES 1",
      "10-2": "CURULES 1",
      "12-1": "CURULES 1",
      "12-2": "CURULES 1",
      "12-3": "CURULES 1",
      "13-1": "CURULES 3",
      "13-2": "CURULES 1",
      "13-3": "CURULES 1",
      "13-4": "CURULES 3",
    },
  };

  async function CreateFileXml() {
    const tickerfeed = xmlbuilder.create("data");
    data.forEach((dataSelect) => {
      const element = tickerfeed.ele("element");
      element.ele("posicion", dataSelect.posicion);
      element.ele("nombre", dataSelect.nombre);
      element.ele("id", dataSelect.id);
      element.ele("partido", dataSelect.partido);
      element.ele("idpartido", dataSelect.idpartido);
      if (dataSelect.partidosec && dataSelect.idpartidosec) {
        element.ele("partidosec", dataSelect.partidosec);
        element.ele("idpartidosec", dataSelect.idpartidosec);
      }
      element.ele("provincia", dataSelect.provincia);
      if (dataSelect.distrito) {
        element.ele("distrito", dataSelect.distrito);
      }
      if (dataSelect.circuito) {
        element.ele("circuito", "CIRCUITO " + dataSelect.circuito);
        element.ele(
          "curules",
          curules[dataSelect.partido]?.[dataSelect.circuito] || ""
        );
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
