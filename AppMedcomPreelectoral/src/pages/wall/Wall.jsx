import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Navbar, Table, Createxml, ControlWall } from "../../components";

export const Wall = ({
  dataSelect,
  SetdataSelect,
  dataXml,
  setMostrarNavbar,
  mostrarNavbar,
  navbarActivado,
  setNavbarActivado,
}) => {
  const { role } = useParams();
  return (
    <div>
      <div className="w-fit float-left ">
        <Navbar
          dataSelect={SetdataSelect}
          role={role}
          setMostrarNavbar={role === "videowall" ? setMostrarNavbar : () => {}}
          mostrarNavbar={role === "videowall" ? mostrarNavbar : true}
          navbarActivado={role === "videowall" ? navbarActivado : true}
        />
      </div>
      <div className="fixed right-0 mr-10 pt-4 flex space-x-5 items-center">
        <h1 className=" text-2xl font-extrabold leading-none  text-red-500 md:text-5xl  ">
          {role === "fullscreen" ? "FULLSCREEN" : "WALL"}
        </h1>
        {role === "fullscreen" ? (
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-white cursor-pointer opacity-80 hover:opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        ) : (
          <></>
        )}
      </div>

      <div className="h-screen  flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="w-full px-10">
            {
              dataSelect.length > 0 ? (
                <>
                  <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight  md:text-5xl  text-white w-fit mx-auto py-5">
                    {dataSelect[0].corporacion}{" "}
                    {dataSelect[0].corporacion !== "PRESIDENTE" ? (
                      <>-</>
                    ) : (
                      <></>
                    )}{" "}
                    {dataSelect[0].distrito && dataSelect[0].distrito}{" "}
                    {dataSelect[0].circuito && (
                      <>CIRCUITO {dataSelect[0].circuito}</>
                    )}
                  </h1>
                  <Table
                    admin={false}
                    data={dataSelect}
                    setSelectIdDelete={() => {}}
                    setMostrarDelete={() => {}}
                    setMostrarEdit={() => {}}
                  />
                  {role === "fullscreen" ? (
                    <div className="flex w-fit mx-auto mt-5 text-red">
                      <Createxml data={dataSelect} />
                    </div>
                  ) : (
                    <div className="flex w-fit mx-auto mt-5 text-red">
                      <ControlWall
                        data={dataSelect}
                        setMostrarNavbar={setMostrarNavbar}
                        setNavbarActivado={setNavbarActivado}
                      />
                    </div>
                  )}
                </>
              ) : role === "fullscreen" ? (
                <>
                  <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight  md:text-5xl  text-white w-fit mx-auto py-5">
                    ULTIMO ARCHIVO XML GENERADO
                  </h1>
                  <Table
                    admin={false}
                    data={dataXml ? dataXml : []}
                    setSelectIdDelete={() => {}}
                    setMostrarDelete={() => {}}
                    setMostrarEdit={() => {}}
                  />
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
  setMostrarNavbar: PropTypes.func.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  navbarActivado: PropTypes.bool.isRequired,
  setNavbarActivado: PropTypes.func.isRequired,
};
