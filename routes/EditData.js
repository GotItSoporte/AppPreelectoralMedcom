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
  const partido = req.body.partido;
  const idpartido = req.body.idpartido;
  const partido2 = req.body.partido2;
  const idpartido2 = req.body.idpartido2;
  const partido3 = req.body.partido3;
  const idpartido3 = req.body.idpartido3;
  const partido4 = req.body.partido4;
  const idpartido4 = req.body.idpartido4;

  try {
    const connection = await oracledb.getConnection(dbConfig);

    const tableName = corporacion === 'PRESIDENTE' ? 'presidentes' : corporacion;
    const sql = corporacion !== 'DIPUTADOS' ? `UPDATE ${tableName} SET nombre = :1, id = :2, partido = :3, idpartido = :4, partido2 = :5, idpartido2 = :6, partido3 = :7, idpartido3 = :8 WHERE idgeneral = :9` :
    `UPDATE ${tableName} SET nombre = :1, id = :2, partido = :3, idpartido = :4, partido2 = :5, idpartido2 = :6, partido3 = :7, idpartido3 = :8, partido4 = :9, idpartido4 = :10 WHERE idgeneral = :11`;
    const bindParams = corporacion !== 'DIPUTADOS' ? [name, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3, candidatoId] : 
    [name, id, partido, idpartido, partido2, idpartido2, partido3, idpartido3,partido4, idpartido4, candidatoId];
    

    const result = await connection.execute(sql, bindParams, { autoCommit: true });

    console.log('Elemento editado correctamente');
    res.json({ message: 'Elemento editado correctamente' });
  } catch (err) {
    console.error('Error al editar el elemento:', err);
    res.status(500).json({ error: 'Error al editar el elemento' });
  }
});

module.exports = router;
