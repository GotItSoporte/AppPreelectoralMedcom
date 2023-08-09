import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import fetchApiData from "../../apis/ReadDataSql";

export const NavbarLoad = () => {
  const [nameCorporación] = useState(["PRESIDENTES", "ALCALDES", "DIPUTADOS"]);
  const [open, setOpen] = useState({});
  const [data, setData] = useState({});
  const [infoSelect, setInfoSelect] = useState({});

  const toggleOpen = (el) => {
    setOpen({
      ...open,
      [el]: !open[el],
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

  return (
    <Navbar
      nameCorporación={nameCorporación}
      toggleOpen={toggleOpen}
      open={open}
      data={data}
      handleSelectInfo={handleSelectInfo}
    />
  );
};
