const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

const dbConfig = {
  user: "INFORMACIONPREELECTORAL",
  password: "@44K7UzZr#1I",
  connectString: "10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com", // Ejemplo: localhost:1521/tu_servicio
};

router.post("/", async (req, res) => {
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

  try {
    const connection = await oracledb.getConnection(dbConfig);

    let query;
    let bindParams;

    if (selectedCorporacion === "PRESIDENTE") {
      query =
        "INSERT INTO presidentes (posicion, nombre, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3, provincia, corporacion) VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11)";
      bindParams = [
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
        "PRESIDENTES",
      ];
    } else if (selectedCorporacion === "ALCALDES") {
      query =
        "INSERT INTO alcaldes (posicion, nombre, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3, provincia, distrito, corporacion) VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12)";
      bindParams = [
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
      ];
    } else if (selectedCorporacion === "DIPUTADOS") {
      query =
        "INSERT INTO diputados (posicion, nombre, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3, provincia, circuito, corporacion) VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10, :11, :12)";
      bindParams = [
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
      ];
    }

    const result = await connection.execute(query, bindParams, { autoCommit: true });

    console.log("Data inserted successfully");
    res.status(200).json({ mensaje: "Datos insertados exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al insertar datos en la base de datos");
  }
});

module.exports = router;
