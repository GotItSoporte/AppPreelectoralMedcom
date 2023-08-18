import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Navbar, Table, Createxml } from "../../components";

export const Wall = ({ dataSelect, SetdataSelect, dataXml }) => {
  const { role } = useParams();

  return (
    <div>
      <div className="w-fit float-left">
        <Navbar dataSelect={SetdataSelect} role={role}  />
      </div>
  
      
      <h1 className="fixed right-0 mr-10 pt-4 text-2xl font-extrabold leading-none  text-red-500 md:text-5xl  ">
        {role === "fullscreen" ? "FULLSCREEN" : "WALL"}
      </h1>
      <div className="h-screen  flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="w-full px-10">
            {
              dataSelect.length > 0 ? (
                <>
                  <Table admin={false} data={dataSelect} />
                  {role === "fullscreen" ? (
                    <div className="flex w-fit mx-auto mt-5 text-red">
                      <Createxml data={dataSelect} />
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : role === "fullscreen" ? (
                <>
                  <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  dark:text-white">
                    ULTIMO ARCHIVO XML GENERADO
                  </h1>
                  <Table admin={false} data={dataXml ? dataXml : []} />
                </>
              ) : (
                <></>
              )
              //
            }
          </div>
        </div>
      </div>
    </div>
  );
};

Wall.propTypes = {
  dataSelect: PropTypes.array.isRequired,
  SetdataSelect: PropTypes.func.isRequired,
  dataXml: PropTypes.array.isRequired,
};
