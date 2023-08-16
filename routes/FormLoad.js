const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

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
  const selectedIdPartido = req.body.selectedIdPartido;
  const selectedPartidoSec = req.body.selectedPartidoSec;
  const selectedIdPartidoSec = req.body.selectedPartidoSec;
  const selectedProvincia = req.body.selectedProvincia;
  const selectedDistrito = req.body.selectedDistrito;
  const selectedCircuito = req.body.selectedCircuito;
  const selectedCorporacion = req.body.selectedCorporacion;

  if (selectedCorporacion === "PRESIDENTES") {
    const query =
      "INSERT INTO presidentes (posicion,nombre,id,partido,idpartido,provincia,corporacion) VALUES (?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        selectedIdPartido,
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
      "INSERT INTO alcaldes (posicion,nombre,id,partido,idpartido,provincia,distrito,corporacion) VALUES (?,?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        selectedIdPartido,
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
      "INSERT INTO diputados (posicion,nombre,id,partido,idpartido,partidosec,idpartidosec,provincia,circuito,corporacion) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        selectedIdPartido,
        selectedPartidoSec,
        selectedIdPartidoSec,
        selectedProvincia,
        selectedCircuito,
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
