const express = require("express");
const router = express.Router();
var fs = require("fs");
var convert = require("xml-js");

const CreateXMLFullScreen = async (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "W:/PreelectoralMedcom/XML/fullScreen.xml",
      data.data,
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve("Archivo XML creado exitosamente");
        }
      }
    );
  });
};

router.post("/", async function (req, res) {
  const candidatos = req.body;
  try {
    res.json(await CreateXMLFullScreen(candidatos));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
