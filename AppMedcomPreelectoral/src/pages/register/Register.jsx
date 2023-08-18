import React from "react";
import PropTypes from "prop-types";
import { Table, Dropdown, Button, Form, WindowDelete } from "../../components";

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

  //Delete
  mostrarDelete,
  setMostrarDelete,
  selectIdDelete,
  setSelectIdDelete,
}) => {

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
            {selectedOption !== "PRESIDENTE" && (
              <Dropdown
                selectedOption={selectedProvincia}
                setSelectedOption={setSelectedProvincia}
                setList={[
                  "Todas las provincias",
                  ...new Set(data.map((item) => item.provincia)),
                ]} // const provincias = ['Todas', ...new Set(data.map((item) => item.provincia))];
              />
            )}

            {selectedOption === "ALCALDES" ? (
              <Dropdown
                selectedOption={selectedDistrito}
                setSelectedOption={setSelectedDistrito}
                setList={[
                  "Todos los distritos",
                  ...new Set(
                    data
                      .filter((item) => item.provincia === selectedProvincia)
                      .map((item) => item.distrito)
                  ),
                ]}
              />
            ) : selectedOption === "DIPUTADOS" ? (
              <Dropdown
                selectedOption={selectedCircuito}
                setSelectedOption={setSelectedCircuito}
                setList={[
                  "Todos los circuitos",
                  ...new Set(
                    data
                      .filter((item) => item.provincia === selectedProvincia)
                      .map((item) => item.circuito)
                  ),
                ]}
              />
            ) : null}

            <Dropdown
              selectedOption={selectedPartido}
              setSelectedOption={setSelectedPartido}
              setList={
                selectedOption !== "PRESIDENTE"
                  ? [
                      "Todos los partidos",
                      ...new Set(
                        data
                          .filter((item) =>
                            item.distrito
                              ? item.distrito === selectedDistrito
                              : item.circuito
                              ? item.circuito === selectedCircuito
                              : null
                          )
                          .map((item) => item.partido)
                      ),
                    ]
                  : [
                      "Todos los partidos",
                      ...new Set(data.map((item) => item.partido)),
                    ]
              }
            />
          </div>
          <div className="flex" onClick={() => setMostrarFormulario(true)}>
            <Button name="Añadir Candidato" type="Principal" rute="" />
          </div>
        </div>

        <Table admin={true} data={dataSend} setSelectIdDelete={setSelectIdDelete} setMostrarDelete={setMostrarDelete}  />
      </div>
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          mostrarFormulario ? "" : "hidden"
        }`}
      >
        <Form setMostrar={setMostrarFormulario} />
      </div>

      <div className={`fixed inset-0 flex items-center justify-center ${mostrarDelete?'':'hidden'}`}>
        <WindowDelete selectIdDelete={selectIdDelete} data={data} setMostrarDelete={setMostrarDelete}/>
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

  //Delete

  mostrarDelete: PropTypes.bool.isRequired,
  setMostrarDelete: PropTypes.func.isRequired,
  selectIdDelete: PropTypes.number.isRequired,
  setSelectIdDelete: PropTypes.func.isRequired,
};
