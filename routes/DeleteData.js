const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

const dbConfig = {
  user: "INFORMACIONPREELECTORAL",
  password: "@44K7UzZr#1I",
  connectString: "10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com", // Ejemplo: localhost:1521/tu_servicio
};

router.delete("/", async (req, res) => {
  const candidatoId = req.body.selectId;
  const corporacion = req.body.corporacion;

  try {
    const connection = await oracledb.getConnection(dbConfig);

    const tableName = corporacion === 'PRESIDENTE' ? 'presidentes' : corporacion;
    const sql = `DELETE FROM ${tableName} WHERE idgeneral = :1`;

    const bindParams = [candidatoId];

    const result = await connection.execute(sql, bindParams, { autoCommit: true });

    console.log('Elemento eliminado correctamente');
    res.json({ message: 'Elemento eliminado correctamente' });
  } catch (err) {
    console.error('Error al eliminar el elemento:', err);
    res.status(500).json({ error: 'Error al eliminar el elemento' });
  }
});

module.exports = router;
