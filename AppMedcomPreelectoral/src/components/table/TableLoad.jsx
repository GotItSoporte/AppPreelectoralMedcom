import React from "react";
import PropTypes from "prop-types";
import { Table } from "./Table";

export const TableLoad = ({ admin, data }) => {
  return <Table admin={admin} data={data ? data : null} />;
};

TableLoad.propTypes = {
  admin: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
};
