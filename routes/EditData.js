const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");

const dbConfig = {
  user: "INFORMACIONPREELECTORAL",
  password: "@44K7UzZr#1I",
  connectString: "10.26.27.21:1521/medc.medcomsubnet.medcomvcn.oraclevcn.com", // Ejemplo: localhost:1521/tu_servicio
};

router.put("/", async (req, res) => {
  const candidatoId = req.body.selectId;
  const corporacion = req.body.corporacion;
  const name = req.body.name;
  const id = req.body.id;

  try {
    const connection = await oracledb.getConnection(dbConfig);

    const tableName = corporacion === 'PRESIDENTE' ? 'presidentes' : corporacion;
    const sql = `UPDATE ${tableName} SET nombre = :1, id = :2 WHERE idgeneral = :3`;

    const bindParams = [name, id, candidatoId];

    const result = await connection.execute(sql, bindParams, { autoCommit: true });

    console.log('Elemento editado correctamente');
    res.json({ message: 'Elemento editado correctamente' });
  } catch (err) {
    console.error('Error al editar el elemento:', err);
    res.status(500).json({ error: 'Error al editar el elemento' });
  }
});

module.exports = router;
