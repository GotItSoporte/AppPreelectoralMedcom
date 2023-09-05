const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

const dbConfig = {
  user: "your_username",
  password: "your_password",
  connectString: "your_connection_string", // e.g., localhost:1521/your_service_name
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

    if (selectedCorporacion === "PRESIDENTE") {
      const query =
        "INSERT INTO presidentes (posicion, nombre, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3, provincia, corporacion) VALUES (:posicion, :nombre, :id, :partido, :idpartido, :partido2, :idpartido2, :partido3, :idpartido3, :provincia, :corporacion)";

      const result = await connection.execute(query, {
        posicion: selectedPosicion,
        nombre: selectedName,
        id: selectedId,
        partido: selectedPartido,
        idpartido: selectedIdPartido,
        partido2: selectedPartido2,
        idpartido2: selectedIdPartido2,
        partido3: selectedPartido3,
        idpartido3: selectedIdPartido3,
        provincia: selectedProvincia,
        corporacion: selectedCorporacion,
      });
    } else if (selectedCorporacion === "ALCALDES") {
      const query =
        "INSERT INTO alcaldes (posicion, nombre, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3, provincia, distrito, corporacion) VALUES (:posicion, :nombre, :id, :partido, :idpartido, :partido2, :idpartido2, :partido3, :idpartido3, :provincia, :distrito, :corporacion)";

      const result = await connection.execute(query, {
        posicion: selectedPosicion,
        nombre: selectedName,
        id: selectedId,
        partido: selectedPartido,
        idpartido: selectedIdPartido,
        partido2: selectedPartido2,
        idpartido2: selectedIdPartido2,
        partido3: selectedPartido3,
        idpartido3: selectedIdPartido3,
        provincia: selectedProvincia,
        distrito: selectedDistrito,
        corporacion: selectedCorporacion,
      });
    } else if (selectedCorporacion === "DIPUTADOS") {
      const query =
        "INSERT INTO diputados (posicion, nombre, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3, provincia, circuito, corporacion) VALUES (:posicion, :nombre, :id, :partido, :idpartido, :partido2, :idpartido2, :partido3, :idpartido3, :provincia, :circuito, :corporacion)";

      const result = await connection.execute(query, {
        posicion: selectedPosicion,
        nombre: selectedName,
        id: selectedId,
        partido: selectedPartido,
        idpartido: selectedIdPartido,
        partido2: selectedPartido2,
        idpartido2: selectedIdPartido2,
        partido3: selectedPartido3,
        idpartido3: selectedIdPartido3,
        provincia: selectedProvincia,
        circuito: selectedCircuito,
        corporacion: selectedCorporacion,
      });
    }

    console.log("Data inserted successfully");
    res.status(200).send("Data inserted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al insertar datos en la base de datos");
  } finally {
    connection.close(); // Don't forget to close the connection when you're done.
  }
});

module.exports = router;
