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
  listPosicion,
  selectedCorporacion,
  setSelectedCorporacion,
  listCorporacion,
  selectedPartido,
  setSelectedPartido,
  selectedPartidoSec,
  setSelectedPartidoSec,
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
  console.log([listProvincia[0]]);
  return (
    <div
      className="p-10 w-full sm:w-3/4 lg:w-2/3  bg-gray-900 border-4 border-red-500 rounded-xl mx-auto overflow-auto h-2/3 sm:h-fit"
      id="ventanaFormulario"
    >
      <div
        className="flex justify-end"
        onClick={() => setMostrarFormulario(false)}
      >
        <Button type="Principal" name="Cerrar" rute="" />
      </div>

      <h1 className="text-5xl font-bold tracking-tight text-white text-center mb-10 lg:mx-0">
        REGISTRAR CANDIDATO
      </h1>
      <form onSubmit={handleSubmit} className="lg:mx-36">
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 md:gap-6 my-5 mx-auto w-fit gap-4 text-center  ">
          <Dropdown
            selectedOption={selectedCorporacion}
            setSelectedOption={setSelectedCorporacion}
            setList={listCorporacion}
          />
          {selectedCorporacion !== "Corporacion..." ? (
            <>
              <Dropdown
                selectedOption={selectedPartido}
                setSelectedOption={setSelectedPartido}
                setList={listPartido}
              />
              <Dropdown
                selectedOption={selectedProvincia}
                setSelectedOption={setSelectedProvincia}
                setList={
                  selectedCorporacion !== "PRESIDENTES"
                    ? listProvincia.slice(1)
                    : [listProvincia[0]]
                }
              />
            </>
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
            <Dropdown
              selectedOption={selectedCircuito}
              setSelectedOption={setSelectedCircuito}
              setList={
                listCircuito[selectedProvincia]
                  ? listCircuito[selectedProvincia]
                  : []
              }
            />
          ) : (
            <></>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white text-center my-10 lg:mx-0">
          DATOS DEL CANDIDATO
        </h1>
        <div className="grid lg:grid-cols-3 md:gap-6 items-center">
          <div className="relative z-0 w-full mb-6 group">
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
          <div className="relative z-0 w-full mb-6 group">
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
          <div className="flex justify-around lg:justify-center sm:space-x-10">
            <Dropdown
              selectedOption={selectedPosicion}
              setSelectedOption={setSelectedPosicion}
              setList={listPosicion}
            />
            {selectedCorporacion === "DIPUTADOS" ? (
              <Dropdown
                selectedOption={selectedPartidoSec}
                setSelectedOption={setSelectedPartidoSec}
                setList={listPartido}
              />
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10 cursor-pointer">
          <button
            className={`flex ${
              selectedName === "" ||
              selectedId === "" ||
              selectedPosicion === "posición..." ||
              selectedPartido === "Partido..." ||
              selectedCorporacion === "Corporacion..." ||
              (selectedCorporacion === "PRESIDENTES" &&
                selectedProvincia === "Provincia...") ||
              (selectedCorporacion === "ALCALDES" &&
                selectedProvincia === "Provincia...") ||
              (selectedCorporacion === "ALCALDES" &&
                selectedDistrito === "Distrito...") ||
              (selectedCorporacion === "DIPUTADOS" &&
                selectedProvincia === "Provincia...") ||
              (selectedCorporacion === "DIPUTADOS" &&
                selectedCircuito === "Circuito...") ||
              (selectedCorporacion === "DIPUTADOS" &&
                selectedPartidoSec === "Partido Secundario...")
                ? "opacity-30"
                : ""
            } `}
            type="submit"
            disabled={
              selectedPosicion === "posición..." ||
              selectedPartido === "Partido..." ||
              selectedCorporacion === "Corporacion..." ||
              selectedCorporacion === "PRESIDENTES"
                ? selectedProvincia === "Provincia..."
                : "" || selectedCorporacion === "ALCALDES"
                ? selectedProvincia === "Provincia..." ||
                  selectedDistrito === "Distrito..."
                : "" || selectedCorporacion === "DIPUTADOS"
                ? selectedProvincia === "Provincia..." ||
                  selectedCircuito === "Circuito..." ||
                  selectedPartidoSec === "Partido Secundario..."
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
  listPosicion: PropTypes.array.isRequired,
  selectedCorporacion: PropTypes.string.isRequired,
  setSelectedCorporacion: PropTypes.func.isRequired,
  listCorporacion: PropTypes.array.isRequired,
  selectedPartido: PropTypes.string.isRequired,
  setSelectedPartido: PropTypes.func.isRequired,
  selectedPartidoSec: PropTypes.string.isRequired,
  setSelectedPartidoSec: PropTypes.func.isRequired,
  listPartido: PropTypes.array.isRequired,
  selectedProvincia: PropTypes.string.isRequired,
  setSelectedProvincia: PropTypes.func.isRequired,
  listProvincia: PropTypes.array.isRequired,
  selectedDistrito: PropTypes.string.isRequired,
  listDistrito: PropTypes.object.isRequired,
  setSelectedDistrito: PropTypes.func.isRequired,
  selectedCircuito: PropTypes.string.isRequired,
  setSelectedCircuito: PropTypes.func.isRequired,
  listCircuito: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
