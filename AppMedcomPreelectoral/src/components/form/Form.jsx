import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Button } from "../../components";

export const Form = ({
  //formulario
  setMostrarFormulario,
  //variables
  selectedName,
  setSelectedName,
  selectedId,
  setSelectedId,
  selectedPosicion,
  setSelectedPosicion,
  selectedListPosicion,
  selectedCorporacion,
  setSelectedCorporacion,
  listCorporacion,
  selectedPartido,
  setSelectedPartido,
  selectedPartido2,
  setSelectedPartido2,
  selectedPartido3,
  setSelectedPartido3,
  listPartido,
  selectedProvincia,
  setSelectedProvincia,
  listProvincia,
  selectedDistrito,
  listDistrito,
  setSelectedDistrito,
  selectedCircuito,
  setSelectedCircuito,
  listCircuito,
  handleSubmit,
}) => {
  return (
    <div
      className="p-10 w-full sm:w-3/4 lg:w-2/3  bg-gray-900 border-4 border-red-500 rounded-xl mx-auto overflow-auto h-2/3 sm:h-fit"
      id="ventanaFormulario"
    >
      <div
        className="flex justify-end mb-5"
        onClick={() => setMostrarFormulario(false)}
      >
        <Button type="Principal" name="Cerrar" rute="" />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-5 md:mb-10 lg:mx-0">
        REGISTRAR CANDIDATO
      </h1>
      <form onSubmit={handleSubmit} className="">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:flex justify-center md:gap-6 my-5 mx-auto w-fit gap-4 text-center  ">
          <Dropdown
            selectedOption={selectedCorporacion}
            setSelectedOption={setSelectedCorporacion}
            setList={listCorporacion}
          />
          {selectedCorporacion !== "Corporacion..." ? (
            <div
              className={`${
                selectedCorporacion === "PRESIDENTE" ? "hidden" : ""
              }`}
            >
              <Dropdown
                selectedOption={selectedProvincia}
                setSelectedOption={setSelectedProvincia}
                setList={
                  selectedCorporacion !== "PRESIDENTE"
                    ? listProvincia.slice(1)
                    : [listProvincia[0]]
                }
              />
            </div>
          ) : (
            <></>
          )}
          {selectedCorporacion === "ALCALDES" ? (
            <Dropdown
              selectedOption={selectedDistrito}
              setSelectedOption={setSelectedDistrito}
              setList={
                listDistrito[selectedProvincia]
                  ? listDistrito[selectedProvincia]
                  : []
              }
            />
          ) : (
            <></>
          )}
          {selectedCorporacion === "DIPUTADOS" ? (
            <>
              <Dropdown
                selectedOption={selectedCircuito}
                setSelectedOption={setSelectedCircuito}
                setList={
                  listCircuito[selectedProvincia]
                    ? listCircuito[selectedProvincia]
                    : []
                }
              />
              <Dropdown
                selectedOption={selectedPartido}
                setSelectedOption={setSelectedPartido}
                setList={listPartido}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white text-center my-10 lg:mx-0">
          DATOS DEL CANDIDATO
        </h1>
        <div className="grid grid-cols-2 gap-5  sm:grid-cols-3  lg:grid-cols-6 md:gap-5 items-center w-fit mx-auto bg-gray-800 rounded-lg p-10">
          <div className="relative z-0 w-full  group">
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer uppercase"
              placeholder=" "
              required
            />
            <label
              htmlFor="nombre"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full  group">
            <input
              type="text"
              name="id"
              id="id"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="id"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Id (123-456-7890)
            </label>
          </div>
          <Dropdown
            selectedOption={selectedPosicion}
            setSelectedOption={setSelectedPosicion}
            setList={selectedListPosicion}
          />

          {selectedCorporacion !== "DIPUTADOS" ? (
            <Dropdown
              selectedOption={selectedPartido}
              setSelectedOption={setSelectedPartido}
              setList={listPartido}
            />
          ) : (
            <></>
          )}

          <Dropdown
            selectedOption={selectedPartido2}
            setSelectedOption={setSelectedPartido2}
            setList={["2º Bandera...", ...new Set(listPartido)]}
          />
          <Dropdown
            selectedOption={selectedPartido3}
            setSelectedOption={setSelectedPartido3}
            setList={["3º Bandera...", ...new Set(listPartido)]}
          />
        </div>

        <div className="flex justify-center mt-20 cursor-pointer">
          <button
            className={`flex ${
              selectedName === "" ||
              selectedId === "" ||
              selectedPosicion === "Posicion" ||
              selectedPosicion === "No hay posiciones libres" ||
              selectedPartido === "1º Bandera..." ||
              selectedCorporacion === "Corporacion..." ||
              (selectedCorporacion === "PRESIDENTE" &&
                selectedProvincia === "Provincia...") ||
              (selectedCorporacion === "ALCALDES" &&
                selectedProvincia === "Provincia...") ||
              (selectedCorporacion === "ALCALDES" &&
                selectedDistrito === "Distrito...") ||
              (selectedCorporacion === "DIPUTADOS" &&
                selectedProvincia === "Provincia...") ||
              (selectedCorporacion === "DIPUTADOS" &&
                selectedCircuito === "Circuito...")
                ? "opacity-30"
                : ""
            } `}
            type="submit"
            disabled={
              selectedPosicion === "Posicion" ||
              selectedPosicion === "No hay posiciones libres" ||
              selectedPartido === "1º Bandera..." ||
              selectedCorporacion === "Corporacion..." ||
              selectedCorporacion === "PRESIDENTE"
                ? selectedProvincia === "Provincia..."
                : "" || selectedCorporacion === "ALCALDES"
                ? selectedProvincia === "Provincia..." ||
                  selectedDistrito === "Distrito..."
                : "" || selectedCorporacion === "DIPUTADOS"
                ? selectedProvincia === "Provincia..." ||
                  selectedCircuito === "Circuito..."
                : ""
            }
          >
            <Button type="Principal" name="Registrar" rute="" />
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  selectedName: PropTypes.string.isRequired,
  setSelectedName: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  setMostrarFormulario: PropTypes.func.isRequired,
  selectedPosicion: PropTypes.string.isRequired,
  setSelectedPosicion: PropTypes.func.isRequired,
  selectedListPosicion: PropTypes.array.isRequired,
  selectedCorporacion: PropTypes.string.isRequired,
  setSelectedCorporacion: PropTypes.func.isRequired,
  listCorporacion: PropTypes.array.isRequired,
  selectedPartido: PropTypes.string.isRequired,
  setSelectedPartido: PropTypes.func.isRequired,
  selectedPartido2: PropTypes.string.isRequired,
  setSelectedPartido2: PropTypes.func.isRequired,
  selectedPartido3: PropTypes.string.isRequired,
  setSelectedPartido3: PropTypes.func.isRequired,
  listPartido: PropTypes.array.isRequired,
  selectedProvincia: PropTypes.string.isRequired,
  setSelectedProvincia: PropTypes.func.isRequired,
  listProvincia: PropTypes.array.isRequired,
  selectedDistrito: PropTypes.string.isRequired,
  listDistrito: PropTypes.object.isRequired,
  setSelectedDistrito: PropTypes.func.isRequired,
  selectedCircuito: PropTypes.string.isRequired,
  setSelectedCircuito: PropTypes.func.isRequired,
  listCircuito: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
