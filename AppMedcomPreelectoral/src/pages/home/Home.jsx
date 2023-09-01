import React from "react";
import PropTypes from "prop-types";
import { Card, Verificacion } from "../../components";

export const Home = ({ mostrarVerificacion, setMostrarVerificacion }) => {
  return (
    <>
      <div className="flex items-center justify-center sm:h-screen  ">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-white text-center mb-10 mx-10 lg:mx-0">
            APLICATIVO PRE-ELECTORAL MEDCOM
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-fit mx-auto">
            <Card
              name="CONTROL FULLSCREEN"
              nameButton="Click Aqui"
              rute="/Wall/fullscreen"
            />
            <Card
              name="CONTROL VIDEOWALL"
              nameButton="Click Aqui"
              rute="/Wall/videowall"
            />
            <div className="lg:col-span-2 lg:row-start-2 lg:self-center mx-auto" onClick={()=>setMostrarVerificacion(true)}>
              <Card
                name="REGISTRO CANDIDATOS"
                nameButton="Click Aqui"
                rute=""
              />
            </div>
          </div>
        </div>
      </div>
      {mostrarVerificacion ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <Verificacion setMostrarVerificacion={setMostrarVerificacion} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

Home.propTypes = {
  mostrarVerificacion: PropTypes.bool.isRequired,
  setMostrarVerificacion: PropTypes.func.isRequired,
};
