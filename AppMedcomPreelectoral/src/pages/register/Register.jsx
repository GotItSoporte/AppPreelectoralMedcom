import React from "react";
import PropTypes from "prop-types";
import { Table, Dropdown, Button, Form } from "../../components";

export const Register = ({
  selectedOption,
  setSelectedOption,
  listCorporacion,
  selectedProvincia,
  setSelectedProvincia,
  mostrarFormulario,
  setMostrarFormulario,
  data,
  dataSend,
  selectedDistrito,
  setSelectedDistrito,
  selectedCircuito,
  setSelectedCircuito,
  selectedPartido,
  setSelectedPartido,
}) => {
  console.log({ data });
  return (
    <>
      <div className="m-5">
        <div className="mb-10 flex justify-between">
          <div className="flex space-x-10">
            <Dropdown
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              setList={listCorporacion}
            />
          <div className="hidden">
          <Dropdown
              selectedOption={selectedProvincia}
              setSelectedOption={setSelectedProvincia}
              setList={[...new Set(data.map((item) => item.provincia))]}
            />
          </div>


            {selectedOption === "ALCALDES" ? (
              <Dropdown
                selectedOption={selectedDistrito}
                setSelectedOption={setSelectedDistrito}
                setList={[...new Set(data.map((item) => item.distrito))]}
              />
            ) : selectedOption === "DIPUTADOS" ? (
              <Dropdown
                selectedOption={selectedCircuito}
                setSelectedOption={setSelectedCircuito}
                setList={[...new Set(data.map((item) => item.circuito))]}
              />
            ) : null}

            <Dropdown
              selectedOption={selectedPartido}
              setSelectedOption={setSelectedPartido}
              setList={[...new Set(data.map((item) => item.partido))]}
            />
          </div>
          <div className="flex" onClick={() => setMostrarFormulario(true)}>
            <Button name="Añadir Candidato" type="Principal" rute="" />
          </div>
        </div>

        <Table admin={true} data={dataSend} />
      </div>
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          mostrarFormulario ? "" : "hidden"
        }`}
      >
        <Form setMostrar={setMostrarFormulario} />
      </div>
    </>
  );
};

Register.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  listCorporacion: PropTypes.array.isRequired,
  selectedProvincia: PropTypes.string.isRequired,
  setSelectedProvincia: PropTypes.func.isRequired,
  selectedDistrito: PropTypes.string.isRequired,
  setSelectedDistrito: PropTypes.func.isRequired,
  selectedCircuito: PropTypes.string.isRequired,
  setSelectedCircuito: PropTypes.func.isRequired,
  selectedPartido: PropTypes.string.isRequired,
  setSelectedPartido: PropTypes.func.isRequired,
  mostrarFormulario: PropTypes.bool.isRequired,
  setMostrarFormulario: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  dataSend: PropTypes.array.isRequired,
};
