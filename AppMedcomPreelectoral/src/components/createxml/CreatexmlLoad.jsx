import React from "react";
import { CreateFile } from "../../apis/CreateFileXml";
import xmlbuilder from "xmlbuilder";
import PropTypes from "prop-types";
import { Createxml } from "./Createxml";

export const CreatexmlLoad = ({ data }) => {
  
  async function CreateFileXml() {
    const tickerfeed = xmlbuilder.create("data");
    data.forEach((dataSelect) => {
      const element = tickerfeed.ele("element");
      element.ele("posicion", dataSelect.posicion);
      element.ele("nombre", dataSelect.nombre);
      element.ele("id", dataSelect.id);
      element.ele("partido", dataSelect.partido);
      element.ele("idpartido", dataSelect.idpartido);
      /*
      if (dataSelect.partidosec && dataSelect.idpartidosec){
        element.ele("partidosec", dataSelect.partidosec);
        element.ele("idpartidosec", dataSelect.idpartidosec);
      }
      element.ele("provincia", dataSelect.provincia);
      if (dataSelect.distrito){
        element.ele("distrito", dataSelect.distrito);
      }
      if(dataSelect.circuito){
        element.ele("circuito", dataSelect.circuito);
      }*/
    });
    const xml = tickerfeed.end({ pretty: true }).toString();
    console.log(xml)
    await CreateFile(xml);
  }

  return <Createxml CreateFileXml={CreateFileXml} />;
};

CreatexmlLoad.propTypes = {
  data: PropTypes.array.isRequired,
};
