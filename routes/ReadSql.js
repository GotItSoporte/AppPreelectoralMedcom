const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

// Configure your Oracle Database connection
const dbConfig = {
  user: "INFORMACIONPREELECTORAL",
  password: "@44K7UzZr#1I",
  connectString: "10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com", // Ejemplo: localhost:1521/tu_servicio
};

// Initialize the Oracle connection pool
oracledb.createPool(dbConfig);

router.get("/PRESIDENTE", async function (req, res) {
  try {
    // Get a connection from the Oracle pool
    const connection = await oracledb.getConnection();

    // Execute the Oracle query and fetch results
    const result = await connection.execute(
      "SELECT * FROM PRESIDENTES ORDER BY provincia, posicion ASC, partido"
    );

    // Release the connection back to the pool
    await connection.close();

    // Send the query results as JSON
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/ALCALDES", async function (req, res) {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      "SELECT * FROM alcaldes ORDER BY provincia, distrito, posicion ASC, partido"
    );
    await connection.close();
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/DIPUTADOS", async function (req, res) {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      "SELECT * FROM diputados ORDER BY provincia, circuito, partido, posicion ASC"
    );
    await connection.close();
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;