import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../components";

export const Card = ({ name, nameButton, rute }) => {
  return (
    <div className="max-w-sm p-6  border rounded-lg shadow bg-gray-800 border-gray-700">
      <a href="#">
        <h5 className="mb-10 text-5xl font-bold tracking-tight text-white text-center cursor-default">
          {name}
        </h5>
      </a>
      <div className="flex justify-center">
        <Button type="Principal" name={nameButton} rute={rute} />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  rute: PropTypes.string.isRequired,
  nameButton: PropTypes.string.isRequired,
};
