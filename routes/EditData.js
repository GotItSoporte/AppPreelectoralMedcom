const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "informacionpreelectoral",
});

router.put("/", (req, res) => {

    const candidatoId = req.body.selectId;
    const corporacion = req.body.corporacion;
    const name = req.body.name;
    const id = req.body.id;
  
    const sql = `UPDATE ${corporacion==='PRESIDENTE'?'presidentes':corporacion} SET nombre = ?,id = ? WHERE idgeneral = ?`;
  
    db.query(sql, [name,id,candidatoId], (err, result) => {
        if (err) {
          console.error('Error al editar el elemento:', err);
          res.status(500).json({ error: 'Error al editar el elemento' });
        } else {
          console.log('Elemento editado correctamente');
          res.json({ message: 'Elemento editado correctamente' });
        }
      });
  });

module.exports = router;
