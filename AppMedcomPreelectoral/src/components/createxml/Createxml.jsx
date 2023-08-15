import React from "react";
import { Button } from "../../components";
import PropTypes from "prop-types";

export const Createxml = ({ CreateFileXml }) => {
  return (
    <button className="flex" onClick={() => CreateFileXml()}>
      <Button name="Click Aqui" type="Principal" rute="" />
    </button>
  );
};

Createxml.propTypes = {
  CreateFileXml: PropTypes.func.isRequired,
};
