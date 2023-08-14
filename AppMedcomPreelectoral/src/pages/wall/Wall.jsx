import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Table, Button } from "../../components";

export const Wall = () => {
  const { role } = useParams();
  const [dataSelect, SetdataSelect] = useState([]);
  return (
    <div>
      <div className="w-fit float-left">
        <Navbar dataSelect={SetdataSelect} />
      </div>

      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="w-full px-10">
            <Table admin={false} data={dataSelect} />
            {role === "presentador" ? (
              <div className="flex w-fit mx-auto mt-5">
                <Button type="Principal" name="Click Aqui" rute="" />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
