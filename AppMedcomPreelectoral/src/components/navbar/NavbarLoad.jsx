import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Navbar } from "./navbar";
import fetchApiData from "../../apis/ReadDataSql";

export const NavbarLoad = ({ dataSelect,role,setMostrarNavbar,
  mostrarNavbar}) => {
  const [nameCorporacion] = useState(["PRESIDENTE", "ALCALDES", "DIPUTADOS"]);
  const [open, setOpen] = useState({});
  const [openProvincia, setOpenProvincia] = useState({});
  const [openCircuito, setOpenCircuito] = useState({});
  const [openPartido, setOpenPartido] = useState({});
  const [data, setData] = useState({});

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
    setOpenCircuito({
      ...openCircuito,
      [el]: !openCircuito[el],
    });
  };

  const toggleOpenPartido = (el) => {
    setOpenPartido({
      ...openPartido,
      [el]: !openPartido[el],
    });
  };

  useEffect(() => {
    const fetchMultipleData = async () => {
      const newData = {};
      for (const corporacion in open) {
        if (open[corporacion]) {
          const apiData = await fetchApiData(corporacion);
          newData[corporacion] = apiData;
        }
      }
      setData(newData);
    };
    fetchMultipleData();
  }, [open]);

  return (
    <Navbar
      nameCorporacion={nameCorporacion}
      toggleOpen={toggleOpen}
      openProvincia={openProvincia}
      toggleOpenProvincia={toggleOpenProvincia}
      openCircuito={openCircuito}
      toggleOpenCircuito={toggleOpenCircuito}
      openPartido={openPartido}
      toggleOpenPartido={toggleOpenPartido}
      open={open}
      data={data}
      dataSelect={dataSelect}
      role={role}
      setMostrarNavbar={setMostrarNavbar}
      mostrarNavbar={mostrarNavbar}
    />
  );
};

NavbarLoad.propTypes = {
  dataSelect: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
};
