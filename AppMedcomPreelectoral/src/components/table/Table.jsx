import React from "react";
import PropTypes from "prop-types";

export const Table = ({
  admin,
  data,
  setSelectIdDelete,
  setMostrarDelete,
  setMostrarEdit,
}) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  w-fit mx-auto">
        <table className="  text-sm text-left  text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-blue-500 text-white">
            {data.length > 0 ? (
              <tr>
                <th scope="col" className="px-10 py-3 text-center">
                  Posición
                </th>
                <th scope="col" className="px-10 py-3 text-center">
                  Nombre
                </th>
                {admin ? (
                  <th scope="col" className="px-10 py-3 text-center">
                    Id
                  </th>
                ) : (
                  <></>
                )}
                {data ? (
                  data[0].corporacion === "DIPUTADOS" ? (
                    <th scope="col" className="px-10 py-3 text-center">
                      Partido (List)
                    </th>
                  ) : (
                    <th scope="col" className="px-10 py-3 text-center">
                      Partido
                    </th>
                  )
                ) : null}
                {data ? (
                  data[0].corporacion === "DIPUTADOS" ? (
                    <th scope="col" className="px-10 py-3 text-center">
                      Partido (Base)
                    </th>
                  ) : null
                ) : null}

                <th scope="col" className="px-10 py-3 text-center">
                  Provincia
                </th>
                {data ? (
                  data[0].corporacion === "ALCALDES" ? (
                    <th scope="col" className="px-10 py-3 text-center">
                      Distrito
                    </th>
                  ) : data[0].corporacion === "DIPUTADOS" ? (
                    <th scope="col" className="px-10 py-3 text-center">
                      Circuito
                    </th>
                  ) : null
                ) : null}

                <th scope="col" className="px-10 py-3 text-center">
                  Corporación
                </th>
                {admin ? (
                  <th scope="col" className="px-10 py-3 ">
                    <span className="sr-only ">Edit</span>
                  </th>
                ) : (
                  <></>
                )}
              </tr>
            ) : (
              <tr>
                <th scope="col" className="px-10 py-3 text-center"></th>
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
                    <th scope="row" className="px-10 py-4 text-center">
                      {data.posicion}
                    </th>
                    <td className="px-10 py-4 ">{data.nombre}</td>
                    {admin ? <td className="px-10 py-4 ">{data.id}</td> : <></>}
                    <td className="px-10 py-4 text-center">{data.partido}</td>
                    {data.corporacion === "DIPUTADOS" ? (
                      <td className="px-10 py-4 text-center">
                        {data.partidosec}
                      </td>
                    ) : null}

                    <td className="px-10 py-4 text-center">{data.provincia}</td>
                    {data.corporacion === "ALCALDES" ? (
                      <td className="px-10 py-4 text-center">
                        {data.distrito}
                      </td>
                    ) : data.corporacion === "DIPUTADOS" ? (
                      <td className="px-10 py-4 text-center">
                        {data.circuito}
                      </td>
                    ) : null}
                    <td className="px-10 py-4 text-center">
                      {data.corporacion}
                    </td>
                    {admin ? (
                      <td className="px-10 py-4 text-center">
                        <a
                          href="#"
                          className="font-medium text-base text-blue-500 hover:underline px-5 "
                          onClick={() => {
                            setMostrarEdit(true);
                            setSelectIdDelete(data.idgeneral);
                          }}
                        >
                          Editar
                        </a>
                        <a
                          href="#"
                          className="font-medium text-base text-red-500 hover:underline px-5 "
                          onClick={() => {
                            setMostrarDelete(true);
                            setSelectIdDelete(data.idgeneral);
                          }}
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
                <th scope="row" className="px-10 py-4 ">
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
  setMostrarEdit: PropTypes.func.isRequired,
};
