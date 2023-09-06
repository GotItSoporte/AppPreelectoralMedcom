const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

// Configuración de la conexión a la base de datos Oracle
const dbConfig = {
  user: "INFORMACIONPREELECTORAL",
  password: "@44K7UzZr#1I",
  connectString: "10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com", // Ejemplo: localhost:1521/tu_servicio
};

router.put("/", async (req, res) => {
  try {
    // Obtener una conexión a la base de datos Oracle
    const connection = await oracledb.getConnection(dbConfig);

    const candidatoId = req.body.selectId;
    const corporacion = req.body.corporacion;
    const name = req.body.name;
    const id = req.body.id;

    const sql = `UPDATE ${corporacion === "PRESIDENTE" ? "presidentes" : corporacion} SET nombre = :nombre, id = :nuevoId WHERE idgeneral = :candidatoId`;

    const result = await connection.execute(
      sql,
      {
        nombre: name,
        nuevoId: id,
        candidatoId: candidatoId,
      },
      { autoCommit: true } // autoCommit:true para confirmar automáticamente la transacción
    );

    console.log("Elemento editado correctamente");
    res.json({ message: "Elemento editado correctamente" });
  } catch (error) {
    console.error("Error al editar el elemento:", error);
    res.status(500).json({ error: "Error al editar el elemento" });
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

module.exports = router;
