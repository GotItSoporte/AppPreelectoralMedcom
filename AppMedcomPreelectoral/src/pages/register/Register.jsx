import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Table,
  Dropdown,
  Button,
  Form,
  WindowDelete,
  WindowEdit,
} from "../../components";

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

  //Edit
  mostrarEdit,
  setMostrarEdit,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const myVariable = location.state ? location.state.myVariable : null;

  useEffect(() => {
    // Verifica la variable después de que el componente se haya renderizado
    if (myVariable === "medcomvoto24sss") {
      //location.pathname !== "/Register#" &&

      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="m-5">
        <div className="mb-10 flex justify-between space-x-3 md:space-x-0">
          <div className="md:flex space-y-5 md:space-y-0 md:space-x-10">
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
          <div className="flex space-x-5 h-fit">
            <div className="flex" onClick={() => setMostrarFormulario(true)}>
              <Button name="Añadir Candidato" type="Principal" rute="" />
            </div>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-white cursor-pointer opacity-80 hover:opacity-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:mx-32">
          <Table
            admin={true}
            data={dataSend}
            setSelectIdDelete={setSelectIdDelete}
            setMostrarDelete={setMostrarDelete}
            setMostrarEdit={setMostrarEdit}
          />
        </div>
      </div>
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          mostrarFormulario ? "" : "hidden"
        }`}
      >
        <Form
          setMostrar={setMostrarFormulario}
          mostrarFormulario={mostrarFormulario}
        />
      </div>

      <div
        className={`fixed inset-0 flex items-center justify-center ${
          mostrarDelete ? "" : "hidden"
        }`}
      >
        <WindowDelete
          selectIdDelete={selectIdDelete}
          data={data}
          setMostrarDelete={setMostrarDelete}
        />
      </div>

      <div
        className={`fixed inset-0 flex items-center justify-center ${
          mostrarEdit ? "" : "hidden"
        }`}
      >
        <WindowEdit
          selectIdDelete={selectIdDelete}
          data={data}
          setMostrarEdit={setMostrarEdit}
          mostrarEdit={mostrarEdit}
        />
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

  //Edit
  mostrarEdit: PropTypes.bool.isRequired,
  setMostrarEdit: PropTypes.func.isRequired,
};
