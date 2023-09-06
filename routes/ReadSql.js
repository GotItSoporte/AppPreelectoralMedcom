const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

// Configuración de la conexión a la base de datos Oracle
const dbConfig = {
  user: 'INFORMACIONPREELECTORAL',
  password: '@44K7UzZr#1I',
  connectString: '10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com',
};

router.get("/PRESIDENTE", async function (req, res) {
  try {
    // Obtener una conexión a la base de datos Oracle
    const connection = await oracledb.getConnection(dbConfig);

    // Ejecutar la consulta SQL y obtener los resultados
    const query =
      "SELECT * FROM presidentes ORDER BY provincia, posicion ASC, partido";
    const result = await connection.execute(query);

    // Convertir el resultado a formato JSON y enviarlo como respuesta
    const rows = result.rows.map((row) => {
      const data = {};
      result.metaData.forEach((meta, index) => {
        data[meta.name] = row[index];
      });
      return data;
    });

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la base de datos" });
  } finally {
    if (connection) {
      // Liberar la conexión de Oracle cuando hayas terminado
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

// Rutas similares para ALCALDES y DIPUTADOS (ajusta las consultas SQL según sea necesario)

module.exports = router;
