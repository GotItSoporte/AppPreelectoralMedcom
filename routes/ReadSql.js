const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

const mysqlRead = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "informacionpreelectoral",
});

router.get("/PRESIDENTES", async function (req, res) {
  try {
    // Ejecutar la consulta y obtener los resultados
    const [rows, fields] = await mysqlRead.query(
      "SELECT * FROM presidentes ORDER BY provincia, posicion ASC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/ALCALDES", async function (req, res) {
  try {
    // Ejecutar la consulta y obtener los resultados
    const [rows, fields] = await mysqlRead.query(
      "SELECT * FROM alcaldes ORDER BY provincia, posicion ASC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.get("/DIPUTADOS", async function (req, res) {
  try {
    // Ejecutar la consulta y obtener los resultados
    const [rows, fields] = await mysqlRead.query(
      "SELECT * FROM diputados ORDER BY provincia, posicion ASC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
