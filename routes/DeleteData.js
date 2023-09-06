const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

// Configuración de la conexión a la base de datos Oracle
const dbConfig = {
  user: "INFORMACIONPREELECTORAL",
  password: "@44K7UzZr#1I",
  connectString: "10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com", // Ejemplo: localhost:1521/tu_servicio
};

router.delete("/", async (req, res) => {
  try {
    // Obtener una conexión a la base de datos Oracle
    const connection = await oracledb.getConnection(dbConfig);

    const candidatoId = req.body.selectId;
    const corporacion = req.body.corporacion;

    const sql = `DELETE FROM ${corporacion === "PRESIDENTE" ? "presidentes" : corporacion} WHERE idgeneral = :candidatoId`;

    const result = await connection.execute(
      sql,
      {
        candidatoId: candidatoId,
      },
      { autoCommit: true } // autoCommit:true para confirmar automáticamente la transacción
    );

    console.log("Elemento eliminado correctamente");
    res.json({ message: "Elemento eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el elemento:", error);
    res.status(500).json({ error: "Error al eliminar el elemento" });
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
