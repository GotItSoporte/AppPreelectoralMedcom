import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Table, Createxml } from "../../components";

export const Wall = () => {
  const { role } = useParams();
  const [dataSelect, SetdataSelect] = useState([]);
  return (
    <div>
      <div className="w-fit float-left">
        <Navbar dataSelect={SetdataSelect}  />
      </div>

      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="w-full px-10">
            {dataSelect.length > 0 ? (
              <>
                <Table admin={false} data={dataSelect} />
                {role === "fullscreen" ? (
                  <div className="flex w-fit mx-auto mt-5 text-red">
                    <Createxml data={dataSelect} />
                  </div>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
