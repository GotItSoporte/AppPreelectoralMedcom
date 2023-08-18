import React from "react";
import PropTypes from "prop-types";
import { Table } from "./Table";

export const TableLoad = ({
  admin,
  data,
  setSelectIdDelete,
  setMostrarDelete,
}) => {
  return (
    <Table
      admin={admin}
      data={data ? data : null}
      setSelectIdDelete={setSelectIdDelete}
      setMostrarDelete={setMostrarDelete}
    />
  );
};

TableLoad.propTypes = {
  admin: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  setSelectIdDelete: PropTypes.func.isRequired,
  setMostrarDelete: PropTypes.func.isRequired,
};
