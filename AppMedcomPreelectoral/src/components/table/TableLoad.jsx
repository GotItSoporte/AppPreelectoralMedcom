import React from "react";
import PropTypes from "prop-types";
import { Table } from "./Table";

export const TableLoad = ({ admin }) => {
  return <Table admin={admin} />;
};

TableLoad.propTypes = {
  admin: PropTypes.bool.isRequired,
};
