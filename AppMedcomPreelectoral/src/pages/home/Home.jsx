import React from "react";
import { Card } from "../../components";

export const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center sm:h-screen  ">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-white text-center mb-10 mx-10 lg:mx-0">
            APLICATIVO PRE-ELECTORAL MEDCOM
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-fit mx-auto">
            <Card
              name="CONTROL MASTER"
              nameButton="Click Aqui"
              rute="/Wall/master"
            />
            <Card
              name="CONTROL PRESENTADOR"
              nameButton="Click Aqui"
              rute="/Wall/presentador"
            />
            <div className="lg:col-span-2 lg:row-start-2 lg:self-center mx-auto">
              <Card
                name="REGISTRO CANDIDATOS"
                nameButton="Click Aqui"
                rute="/Register"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
