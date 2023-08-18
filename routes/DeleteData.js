const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "informacionpreelectoral",
});

router.delete("/", (req, res) => {
    
    console.log('entrro')
    const candidatoId = req.body.selectId;
    const corporacion = req.body.corporacion;
  
    const sql = `DELETE FROM ${corporacion} WHERE idgeneral = ?`;
  
    db.query(sql, [candidatoId], (err, result) => {
        if (err) {
          console.error('Error al eliminar el elemento:', err);
          res.status(500).json({ error: 'Error al eliminar el elemento' });
        } else {
          console.log('Elemento eliminado correctamente');
          res.json({ message: 'Elemento eliminado correctamente' });
        }
      });
  });

module.exports = router;
