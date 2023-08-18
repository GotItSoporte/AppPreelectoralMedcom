import React, { useEffect, useState } from "react";
import { Wall } from "./Wall";
import fetchXmlData from "../../apis/Readxml";
//import fetchApiData from "../../apis/ReadDataSql";

export const WallLoad = () => {
  const [dataSelect, SetdataSelect] = useState([]);
  const [dataXml, setDataXml] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const xmlData = await fetchXmlData();
      setDataXml(xmlData);
    };
    fetchData();
  }, []);

  return (
    <Wall
      dataSelect={dataSelect}
      SetdataSelect={SetdataSelect}
      dataXml={dataXml}
    />
  );
};
