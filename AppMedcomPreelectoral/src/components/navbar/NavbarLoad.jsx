import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import fetchApiData from "../../apis/ReadDataSql";

export const NavbarLoad = () => {
  const [nameCorporación] = useState(["PRESIDENTES", "ALCALDES", "DIPUTADOS"]);
  const [open, setOpen] = useState({});
  const [openProvincia, setOpenProvincia] = useState({});
  const [openCircuito, setOpenCircuito] = useState({});
  const [data, setData] = useState({});
  const [infoSelect, setInfoSelect] = useState({});

  

  const toggleOpen = (el) => {
    setOpen({
      ...open,
      [el]: !open[el],
    });
  };

  const toggleOpenProvincia = (el) => {
    setOpenProvincia({
      ...openProvincia,
      [el]: !openProvincia[el],
    });
  };

  const toggleOpenCircuito = (el) => {
    setOpenCircuito ({
      ...openCircuito,
      [el]: !openCircuito[el],
    });
  };

  const handleSelectInfo = (partido, provincia) => {
    setInfoSelect({
      [partido]: {
        [provincia]: true,
      },
    });
  };

  console.log({infoSelect})

  useEffect(() => {
    const fetchMultipleData = async () => {
      const newData = {};
      for (const corporación in open) {
        if (open[corporación]) {
          const apiData = await fetchApiData(corporación);
          newData[corporación] = apiData;
        }
      }
      setData(newData);
    };
    fetchMultipleData();
  }, [open]);

  console.log({data})

  return (
    <Navbar
      nameCorporación={nameCorporación}
      toggleOpen={toggleOpen}
      openProvincia={openProvincia}
      toggleOpenProvincia={toggleOpenProvincia}
      openCircuito={openCircuito}
      toggleOpenCircuito={toggleOpenCircuito}
      open={open}
      data={data}
      handleSelectInfo={handleSelectInfo}
    />
  );
};
