import React from "react";
import PropTypes from "prop-types";

export const Table = ({admin}) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left  text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-blue-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              {admin ? (
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              ) : (
                <></>
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-700 border-b border-gray-700 hover:bg-gray-600 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
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
                  >
                    Eliminar
                  </a>
                </td>
              ) : (
                <></>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  admin: PropTypes.bool.isRequired,
};
