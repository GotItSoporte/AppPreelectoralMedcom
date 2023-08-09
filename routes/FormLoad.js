const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "informacionpreelectoral",
});

router.post("/", (req, res) => {
  const selectedPosicion = req.body.selectedPosicion;
  const selectedName = req.body.selectedName;
  const selectedId = req.body.selectedId;
  const selectedPartido = req.body.selectedPartido;
  const selectedProvincia = req.body.selectedProvincia;
  const selectedDistrito = req.body.selectedDistrito;
  const selectedCircuito = req.body.selectedCircuito;
  const selectedCurules = req.body.selectedCurules;
  const selectedCorporacion = req.body.selectedCorporacion;

  if (selectedCorporacion === "PRESIDENTES") {
    const query =
      "INSERT INTO presidentes (posición,nombre,id,partido,idpartido,provincia,corporación) VALUES (?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        1,
        selectedProvincia,
        selectedCorporacion,
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al insertar datos en la base de datos");
        }
      }
    );
  } else if (selectedCorporacion === "ALCALDES") {
    const query =
      "INSERT INTO alcaldes (posición,nombre,id,partido,idpartido,provincia,distrito,corporación) VALUES (?,?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        1,
        selectedProvincia,
        selectedDistrito,
        selectedCorporacion,
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al insertar datos en la base de datos");
        }
      }
    );
  } else if (selectedCorporacion === "DIPUTADOS") {
    const query =
      "INSERT INTO diputados (posición,nombre,id,partido,idpartido,provincia,circuito,curules,corporación) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        1,
        selectedProvincia,
        selectedCircuito,
        selectedCurules,
        selectedCorporacion,
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al insertar datos en la base de datos");
        }
      }
    );
  }

  console.log("entro");
});

module.exports = router;
