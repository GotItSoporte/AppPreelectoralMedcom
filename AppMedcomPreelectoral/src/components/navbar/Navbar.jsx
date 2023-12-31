import React from "react";
import logoMedcom from "../../assets/logoMedcom.svg";
import PropTypes from "prop-types";

export const Navbar = ({
  nameCorporacion,
  toggleOpen,
  open,
  toggleOpenProvincia,
  openProvincia,
  toggleOpenCircuito,
  openCircuito,
  openPartido,
  toggleOpenPartido,
  data,
  dataSelect,
  role,
  setMostrarNavbar,
  mostrarNavbar,
  navbarActivado
}) => {
  const provinciaRepetida = {
    PRESIDENTE: {},
    ALCALDES: {},
    DIPUTADOS: {},
  };

  const DistritoRepetido = {
    "BOCAS DEL TORO": {},
    COCLÉ: {},
    COLÓN: {},
    CHIRIQUÍ: {},
    DARIÉN: {},
    "EMBERÁ WOUNAAN": {},
    HERRERA: {},
    "LOS SANTOS": {},
    PANAMÁ: {},
    "PANAMÁ OESTE": {},
    VERAGUAS: {},
    "NGÖBE BUGLÉ": {},
  };

  const CircuitoRepetido = {
    "BOCAS DEL TORO": {},
    COCLÉ: {},
    COLÓN: {},
    CHIRIQUÍ: {},
    DARIÉN: {},
    "EMBERÁ WOUNAAN": {},
    HERRERA: {},
    "LOS SANTOS": {},
    PANAMÁ: {},
    "PANAMÁ OESTE": {},
    VERAGUAS: {},
    "NGÖBE BUGLÉ": {},
  };

  const PartidoRepetido = {
    "1-1": {},
    "2-1": {},
    "2-2": {},
    "2-3": {},
    "2-4": {},
    "3-1": {},
    "3-2": {},
    "4-1": {},
    "4-2": {},
    "4-3": {},
    "4-4": {},
    "4-5": {},
    "4-6": {},
    "5-1": {},
    "5-2": {},
    "6-1": {},
    "6-2": {},
    "6-3": {},
    "7-1": {},
    "7-2": {},
    "8-1": {},
    "8-2": {},
    "8-3": {},
    "8-4": {},
    "8-5": {},
    "8-6": {},
    "9-1": {},
    "9-2": {},
    "9-3": {},
    "9-4": {},
    "12-1": {},
    "12-2": {},
    "12-3": {},
    "13-1": {},
    "13-2": {},
    "13-3": {},
    "13-4": {},
  };

  return (
    <>
      <div className="block navbar-menu relative z-50   ">
        <nav
          className={`fixed lg:static h-screen top-0 left-0 bottom-0 flex flex-col w-72 lg:w-80 sm:max-w-xs pt-2 pb-8   ${
            mostrarNavbar
              ? "overflow-y-auto bg-gray-900 "
              : "-translate-x-56   overflow-hidden "
          }`}
        >
          {role==="videowall"?(
          <div className="flex justify-end mr-3 mb-3 cursor-pointer ">
            {mostrarNavbar ? (
              <svg
                className="h-12 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => setMostrarNavbar(false)}
              >
                {" "}
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            ) : (
              <svg
                className={`h-12 w-12 text-white ${navbarActivado?'':'opacity-40 cursor-not-allowed'} `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => navbarActivado?setMostrarNavbar(true):null}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            )}
          </div>
          ):<></>}
          <div className={`${mostrarNavbar?'':'w-0'}`}>
          <div className=" flex w-full items-center px-6 pb-6 mb-6 border-b border-gray-700 ">
            <a
              className="text-xl text-white font-semibold w-fit mx-auto cursor-default"
              href="#"
            >
              <img className="h-12" src={logoMedcom} alt="" width="auto" />
            </a>
          </div>
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">
              INFORMACION PRE-ELECTORAL
            </h3>
            {role === "fullscreen" ? (
              <a
                className="flex items-center pl-3 py-3 pr-4 text-sm text-gray-50 bg-red-900 hover:bg-blue-500 rounded mb-5 w-fit mx-auto"
                href="#"
                onClick={() => dataSelect([])}
              >
                <span>ULTIMO XML GENERADO</span>
              </a>
            ) : (
              <></>
            )}
            <ul className="mb-8 text-sm font-medium">
              {nameCorporacion.map((corporacion, idx) => {
                return (
                  <li key={idx}>
                    <a
                      className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-900 hover:bg-blue-500 rounded"
                      href="#"
                      onClick={() => toggleOpen(corporacion)}
                    >
                      <span>{corporacion}</span>
                      <span className="inline-block ml-auto">
                        <svg
                          className="text-gray-400 w-3 h-3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    {open[corporacion] &&
                      data[corporacion]?.map((el, idx) => {
                        if (!provinciaRepetida[corporacion][el.provincia]) {
                          provinciaRepetida[corporacion][el.provincia] = true;
                          return (
                            <div key={idx}>
                              <a
                                className={`flex items-center pl-3 py-3 pr-4 text-gray-50 ${
                                  corporacion === "PRESIDENTE"
                                    ? "bg-gray-600"
                                    : "bg-gray-800"
                                }  hover:bg-blue-500 `}
                                href="#"
                                onClick={() => {
                                  corporacion === "PRESIDENTE"
                                    ? dataSelect(
                                        data[corporacion].filter(
                                          (item) =>
                                            item.corporacion === "PRESIDENTE"
                                        )
                                      )
                                    : null; 
                                  corporacion==="PRESIDENTE" && setMostrarNavbar(false);
                                  corporacion === "ALCALDES"
                                    ? toggleOpenProvincia(el.provincia)
                                    : null;
                                  corporacion === "DIPUTADOS"
                                    ? toggleOpenCircuito(el.provincia)
                                    : null;
                                   
                                }}
                              >
                                <span>{el.provincia}</span>
                                {corporacion !== "PRESIDENTE" ? (
                                  <span className="inline-block ml-auto">
                                    <svg
                                      className="text-gray-400 w-3 h-3"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                ) : (
                                  <></>
                                )}
                              </a>
                              {/*ALCALDES*/}

                              {openProvincia[el.provincia] &&
                                corporacion === "ALCALDES" &&
                                data[corporacion]
                                  .filter(
                                    (item) => item.provincia === el.provincia
                                  )
                                  .sort((a, b) =>
                                    a.distrito.localeCompare(b.distrito)
                                  )
                                  ?.map((el2, idx2) => {
                                    if (
                                      !DistritoRepetido[el.provincia][
                                        el2.distrito
                                      ]
                                    ) {
                                      DistritoRepetido[el.provincia][
                                        el2.distrito
                                      ] = true;
                                      return (
                                        <div key={idx2}>
                                          <a
                                            className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-600 hover:bg-blue-500 "
                                            href="#"
                                            onClick={() => {
                                              dataSelect(
                                                data[corporacion].filter(
                                                  (item) =>
                                                    item.provincia ===
                                                      el.provincia &&
                                                    item.distrito ===
                                                      el2.distrito
                                                )
                                              );setMostrarNavbar(false);
                                            }}
                                          >
                                            <span>{el2.distrito}</span>
                                          </a>
                                        </div>
                                      );
                                    }
                                  })}
                              {/*DIPUTADOS*/}
                              {openCircuito[el.provincia] &&
                                corporacion === "DIPUTADOS" &&
                                data[corporacion]
                                  .filter(
                                    (item) => item.provincia === el.provincia
                                  )
                                  .sort((a, b) =>
                                    a.circuito.localeCompare(b.circuito)
                                  )
                                  ?.map((el3, idx3) => {
                                    if (
                                      !CircuitoRepetido[el.provincia][
                                        el3.circuito
                                      ]
                                    ) {
                                      CircuitoRepetido[el.provincia][
                                        el3.circuito
                                      ] = true;
                                      return (
                                        <div key={idx3}>
                                          <a
                                            className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-700 hover:bg-blue-500 "
                                            href="#"
                                            onClick={() => {
                                              toggleOpenPartido(el3.circuito);
                                            }}
                                          >
                                            <span>CIRCUITO {el3.circuito}</span>
                                            <span className="inline-block ml-auto">
                                              <svg
                                                className="text-gray-400 w-3 h-3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                                                  fill="currentColor"
                                                ></path>
                                              </svg>
                                            </span>
                                          </a>
                                          {/*PARTIDOS CIRCUITOS*/}
                                          {openPartido[el3.circuito] &&
                                            data[corporacion]
                                              .filter(
                                                (item) =>
                                                  item.circuito === el3.circuito
                                              )
                                              .sort((a, b) =>
                                                a.partido.localeCompare(
                                                  b.partido
                                                )
                                              )
                                              .map((el4, idx4) => {
                                                if (
                                                  !PartidoRepetido[
                                                    el3.circuito
                                                  ][el4.partido]
                                                ) {
                                                  PartidoRepetido[el3.circuito][
                                                    el4.partido
                                                  ] = true;
                                                  return (
                                                    <div key={idx4}>
                                                      <a
                                                        className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-600 hover:bg-blue-500 "
                                                        href="#"
                                                        onClick={() => {
                                                          dataSelect(
                                                            data[
                                                              corporacion
                                                            ].filter(
                                                              (item) =>
                                                                item.circuito ===
                                                                  el3.circuito &&
                                                                item.partido ===
                                                                  el4.partido
                                                            )
                                                          );setMostrarNavbar(false);
                                                        }}
                                                      >
                                                        <span>
                                                          {el4.partido}
                                                        </span>
                                                      </a>
                                                    </div>
                                                  );
                                                }
                                              })}
                                        </div>
                                      );
                                    }
                                  })}
                            </div>
                          );
                        }
                        return null;
                      })}
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </>
  );
};

Navbar.propTypes = {
  nameCorporacion: PropTypes.array.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.object.isRequired,
  toggleOpenProvincia: PropTypes.func.isRequired,
  openProvincia: PropTypes.object.isRequired,
  toggleOpenCircuito: PropTypes.func.isRequired,
  openCircuito: PropTypes.object.isRequired,
  toggleOpenPartido: PropTypes.func.isRequired,
  openPartido: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  dataSelect: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  setMostrarNavbar: PropTypes.func.isRequired,
  mostrarNavbar: PropTypes.bool.isRequired,
  navbarActivado: PropTypes.bool.isRequired,
};
