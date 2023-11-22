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

    const rows = result.rows.map((row) => {
      return {
        posicion: row[0],
        nombre: row[1],
        id: row[2],
        partido: row[3],
        idpartido: row[4],
        partido2: row[5],
        idpartido2: row[6],
        partido3: row[7],
        idpartido3: row[8],
        provincia: row[9],
        corporacion: row[10],
        idgeneral: row[11],
        partido4: 'NO APLICA',
        idpartido4: 0,
      };
    });

    // Send the query results as JSON
    res.json(rows);
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

    const rows = result.rows.map((row) => {
      return {
        posicion: row[0],
        nombre: row[1],
        id: row[2],
        partido: row[3],
        idpartido: row[4],
        partido2: row[5],
        idpartido2: row[6],
        partido3: row[7],
        idpartido3: row[8],
        provincia: row[9],
        distrito: row[10],
        corporacion: row[11],
        idgeneral: row[12],
        partido4: 'NO APLICA',
        idpartido4: 0,
      };
    });

    res.json(rows);
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


    const rows = result.rows.map((row) => {
      return {
        posicion: row[0],
        nombre: row[1],
        id: row[2],
        partido: row[3],
        idpartido: row[4],
        partido2: row[5],
        idpartido2: row[6],
        partido3: row[7],
        idpartido3: row[8],
        provincia: row[9],
        circuito: row[10],
        corporacion: row[11],
        idgeneral: row[12],
        partido4: row[13],
        idpartido4: row[14],
      };
    });


    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;