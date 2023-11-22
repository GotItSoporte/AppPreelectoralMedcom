const express = require("express");
const xml2js = require("xml2js");
const router = express.Router();
const fs = require("fs"); // Importa el módulo fs

router.get("/", (req, res) => {
  // Lee el contenido del archivo XML utilizando fs.readFile
  fs.readFile(
    "Z:/Voto24/OFERTAELECTORAL/fullScreen.xml",
    "utf8",
    (err, xmlData) => {
      if (err) {
        console.error("Error reading XML file:", err);
        res.status(500).json({ error: "Error reading XML file" });
        return;
      }

      const parser = new xml2js.Parser();

      parser.parseString(xmlData, (parseErr, result) => {
        if (parseErr) {
          console.error("Error parsing XML:", parseErr);
          res.status(500).json({ error: "Error parsing XML" });
        } else {
          const dataArray = result.data.element.map((element) => {
            const item = {
              posicion: element.posicion?.[0] || "",
              nombre: element.nombre?.[0] || "",
              id: element.id?.[0] || "",
              partido: element.partido?.[0] || "",
              idpartido: element.idpartido?.[0] || "",
              partido2: element.partido2?.[0] || "",
              idpartido2: element.idpartido2?.[0] || "",
              partido3: element.partido3?.[0] || "",
              idpartido3: element.idpartido3?.[0] || "",
              provincia: element.provincia?.[0] || "",
              distrito: element.distrito?.[0] || "",
              circuito: element.circuito?.[0] || "",
              corporacion: element.corporacion?.[0] || "",

              // ...agrega los demás campos aquí con asignaciones condicionales
            };
            return item;
          });

          res.json(dataArray);
        }
      });
    }
  );
});

module.exports = router;
