import React from "react";
import PropTypes from "prop-types";

export const Table = ({ admin, data, setSelectIdDelete, setMostrarDelete }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-blue-500 text-white">
            {data.length > 0 ? (
              <tr>
                <th scope="col" className="px-6 py-3">
                  Posición
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Partido
                </th>
                <th scope="col" className="px-6 py-3">
                  Provincia
                </th>
                {data ? (
                  data[0].corporacion === "ALCALDES" ? (
                    <th scope="col" className="px-6 py-3">
                      Distrito
                    </th>
                  ) : data[0].corporacion === "DIPUTADOS" ? (
                    <th scope="col" className="px-6 py-3">
                      Circuito
                    </th>
                  ) : null
                ) : null}

                <th scope="col" className="px-6 py-3">
                  Corporación
                </th>
                {admin ? (
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                ) : (
                  <></>
                )}
              </tr>
            ) : (
              <tr>
                <th scope="col" className="px-6 py-3 text-center"></th>
              </tr>
            )}
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((data, idx) => {
                return (
                  <tr
                    key={idx}
                    className="bg-gray-700 border-b border-gray-700 hover:bg-gray-600 font-medium  whitespace-nowrap hover:text-white "
                  >
                    <th scope="row" className="px-6 py-4 ">
                      {data.posicion}
                    </th>
                    <td className="px-6 py-4">{data.nombre}</td>
                    <td className="px-6 py-4">{data.partido}</td>
                    <td className="px-6 py-4">{data.provincia}</td>
                    {data.corporacion === "ALCALDES" ? (
                      <td className="px-6 py-4">{data.distrito}</td>
                    ) : data.corporacion === "DIPUTADOS" ? (
                      <td className="px-6 py-4">{data.circuito}</td>
                    ) : null}
                    <td className="px-6 py-4">{data.corporacion}</td>
                    {admin ? (
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-base text-blue-500 hover:underline px-5"
                        >
                          Editar
                        </a>
                        <a
                          href="#"
                          className="font-medium text-base text-red-500 hover:underline px-5"
                          onClick={()=>{setMostrarDelete(true);setSelectIdDelete(data.idgeneral)}}
                        >
                          Eliminar
                        </a>
                      </td>
                    ) : (
                      <></>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr className="bg-gray-700 border-b border-gray-700 hover:bg-gray-600 font-medium  whitespace-nowrap hover:text-white text-center ">
                <th scope="row" className="px-6 py-4 ">
                  NO EXISTEN DATOS
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  admin: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  setSelectIdDelete: PropTypes.func.isRequired,
  setMostrarDelete: PropTypes.func.isRequired,
};
