import React from "react";
import PropTypes from "prop-types";
import { Table, Dropdown, Button, Form } from "../../components";


export const Register = ({
  selectedOption,
  setSelectedOption,
  listCorporacion,
  mostrarFormulario,
  setMostrarFormulario
}) => {

  
   console.log({mostrarFormulario})


  return (
    <>
    <div className="m-5">
      <div className="mb-10 flex justify-between">
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setList={listCorporacion}
        />
        <div className="flex" onClick={()=>setMostrarFormulario(true)} >
          <Button name="Añadir Candidato" type="Principal" rute="" />
        </div>
      </div>

      <Table admin={true} />
      <Table admin={true} />
      <Table admin={true} />
      <Table admin={true} />
      <Table admin={true} />
    </div>
    <div className={`fixed inset-0 flex items-center justify-center ${mostrarFormulario?'':'hidden'}`}>
    <Form setMostrar={setMostrarFormulario} />
    </div>
  </>
  );
};

Register.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
  listCorporacion: PropTypes.array.isRequired,
  mostrarFormulario: PropTypes.bool.isRequired,
  setMostrarFormulario: PropTypes.func.isRequired,
};
