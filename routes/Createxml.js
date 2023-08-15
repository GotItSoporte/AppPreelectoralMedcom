const express = require("express");
const router = express.Router();
var fs = require("fs");

const CreateXMLFullScreen = async (data) => {
  return new Promise((resolve, reject) => {
    //C:\Users\zilve\Desktop\PreelectoralMedcom
    fs.writeFile(
      "C:/Users/zilve/Desktop/PreelectoralMedcom/fullScreen.xml",
      data,
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
  console.log(candidatos);
  try {
    res.json(await CreateXMLFullScreen(candidatos));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
