import React from "react";
import logoMedcom from "../../assets/logoMedcom.svg";
import PropTypes from "prop-types";

export const Navbar = ({
  nameCorporación,
  toggleOpen,
  open,
  toggleOpenProvincia,
  openProvincia,
  toggleOpenCircuito,
  openCircuito,
  data,
  handleSelectInfo,
}) => {
  const provinciaRepetida = {
    PRESIDENTES: {},
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

  console.log({ openProvincia });
  console.log({ openCircuito });

  return (
    <>
      <div className="block navbar-menu relative z-50 bg-red-300 ">
        <nav className="fixed lg:static h-screen top-0 left-0 bottom-0 flex flex-col w-72 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-gray-900 overflow-y-auto">
          <div className=" flex w-full items-center px-6 pb-6 mb-6 border-b border-gray-700">
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
            <ul className="mb-8 text-sm font-medium">
              {nameCorporación.map((corporación, idx) => {
                return (
                  <li key={idx}>
                    <a
                      className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-900 hover:bg-blue-500 rounded"
                      href="#"
                      onClick={() => toggleOpen(corporación)}
                    >
                      <span>{corporación}</span>
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
                    {open[corporación] &&
                      data[corporación]?.map((el, idx) => {
                        if (!provinciaRepetida[corporación][el.provincia]) {
                          provinciaRepetida[corporación][el.provincia] = true;
                          return (
                            <div key={idx}>
                              <a
                                className={`flex items-center pl-3 py-3 pr-4 text-gray-50 ${
                                  corporación === "PRESIDENTES"
                                    ? "bg-gray-700"
                                    : "bg-gray-800"
                                }  hover:bg-blue-500 `}
                                href="#"
                                onClick={() => {
                                  corporación === "PRESIDENTES"
                                    ? handleSelectInfo(
                                        corporación,
                                        el.provincia
                                      )
                                    : null;
                                  corporación === "ALCALDES"
                                    ? toggleOpenProvincia(el.provincia)
                                    : null;
                                  corporación === "DIPUTADOS"
                                    ? toggleOpenCircuito(el.provincia)
                                    : null;
                                  console.log({ corporación });
                                }}
                              >
                                <span>{el.provincia}</span>
                                {corporación !== "PRESIDENTES" ? (
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
                                data[corporación]
                                  .filter(
                                    (item) => item.provincia === el.provincia
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
                                            className="flex items-center pl-3 py-3 pr-4 text-gray-50 bg-gray-700 hover:bg-blue-500 "
                                            href="#"
                                            onClick={() =>
                                              handleSelectInfo(
                                                corporación,
                                                el2.distrito
                                              )
                                            }
                                          >
                                            <span>{el2.distrito}</span>
                                          </a>
                                        </div>
                                      );
                                    }
                                  })}
                              {/*DIPUTADOS*/}
                              {openCircuito[el.provincia] &&
                                data[corporación]
                                  .filter(
                                    (item) => item.provincia === el.provincia
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
                                            onClick={() =>
                                              handleSelectInfo(
                                                corporación,
                                                el3.circuito
                                              )
                                            }
                                          >
                                            <span>{el3.circuito}</span>
                                          </a>
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
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </>
  );
};

Navbar.propTypes = {
  nameCorporación: PropTypes.array.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  open: PropTypes.object.isRequired,
  toggleOpenProvincia: PropTypes.func.isRequired,
  openProvincia: PropTypes.object.isRequired,
  toggleOpenCircuito: PropTypes.func.isRequired,
  openCircuito: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  handleSelectInfo: PropTypes.func.isRequired,
};
