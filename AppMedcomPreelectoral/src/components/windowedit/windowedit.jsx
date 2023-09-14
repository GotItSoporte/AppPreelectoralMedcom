import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "../dropdown";
export const WindowEdit = ({
  handleSubmit,
  selectedName,
  setSelectedName,
  selectedId,
  setSelectedId,
  selectedPartido,
  setSelectedPartido,
  selectedPartido2,
  setSelectedPartido2,
  selectedPartido3,
  setSelectedPartido3,
  setMostrarEdit,
  listPartido,
}) => {


  return (
    <>
      <div className="z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full">
        <div className="relative w-full max-w-xl max-h-full">
          <div className="relative  rounded-lg shadow bg-gray-900 ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              data-modal-hide="popup-modal"
              onClick={() => setMostrarEdit(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mx-auto mb-4  w-12 h-12 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal  text-gray-400 px-48 ">
                Editar candidato
              </h3>

              <form onSubmit={handleSubmit} className="">
                <div className="grid lg:grid-cols-2 md:gap-6 items-center">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={selectedName}
                      onChange={(e) => setSelectedName(e.target.value)}
                      className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer uppercase"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="nombre"
                      className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Nombre
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="id"
                      id="id"
                      value={selectedId}
                      onChange={(e) => setSelectedId(e.target.value)}
                      className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="id"
                      className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Id (123-456-7890)
                    </label>
                  </div>
                </div>
                <div className="flex w-fit mx-auto space-x-10 mb-16">
                  <Dropdown
                  selectedOption={selectedPartido}
                  setSelectedOption={setSelectedPartido}
                  setList={listPartido}
                  />
                                <Dropdown
                  selectedOption={selectedPartido2}
                  setSelectedOption={setSelectedPartido2}
                  setList={["NO APLICA", ...new Set(listPartido)]}
                />
                              <Dropdown
                  selectedOption={selectedPartido3}
                  setSelectedOption={setSelectedPartido3}
                  setList={["NO APLICA", ...new Set(listPartido)]}
                />
              </div>
                <button
                  data-modal-hide="popup-modal"
                  type="submit"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none  focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Si,
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className=" focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5  focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
                  onClick={() => setMostrarEdit(false)}
                >
                  No, cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WindowEdit.propTypes = {
  selectedName: PropTypes.string.isRequired,
  setSelectedName: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  selectedPartido: PropTypes.string.isRequired,
  setSelectedPartido: PropTypes.func.isRequired,
  selectedPartido2: PropTypes.string.isRequired,
  setSelectedPartido2: PropTypes.func.isRequired,
  selectedPartido3: PropTypes.string.isRequired,
  setSelectedPartido3: PropTypes.func.isRequired,
  setMostrarEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  listPartido: PropTypes.array.isRequired,
};
