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
  const selectedPartido2 = req.body.selectedPartido2;
  const selectedIdPartido2 = req.body.selectedIdPartido2;
  const selectedPartido3 = req.body.selectedPartido3;
  const selectedIdPartido3 = req.body.selectedIdPartido3;
  const selectedProvincia = req.body.selectedProvincia;
  const selectedDistrito = req.body.selectedDistrito;
  const selectedCircuito = req.body.selectedCircuito;
  const selectedCorporacion = req.body.selectedCorporacion;
  
  if (selectedCorporacion === "PRESIDENTE") {
    const query =
      "INSERT INTO presidentes (posicion,nombre,id,partido,idpartido,partido2,idpartido2,partido3,idpartido3,provincia,corporacion) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        selectedIdPartido,
        selectedPartido2,
        selectedIdPartido2,
        selectedPartido3,
        selectedIdPartido3,
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
      "INSERT INTO alcaldes (posicion,nombre,id,partido,idpartido,partido2,idpartido2,partido3,idpartido3,provincia,distrito,corporacion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        selectedIdPartido,
        selectedPartido2,
        selectedIdPartido2,
        selectedPartido3,
        selectedIdPartido3,
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
      "INSERT INTO diputados (posicion,nombre,id,partido,idpartido,partido2,idpartido2,partido3,idpartido3,provincia,circuito,corporacion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
      query,
      [
        selectedPosicion,
        selectedName,
        selectedId,
        selectedPartido,
        selectedIdPartido,
        selectedPartido2,
        selectedIdPartido2,
        selectedPartido3,
        selectedIdPartido3,
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
