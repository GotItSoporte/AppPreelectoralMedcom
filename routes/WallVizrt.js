const express = require("express");
const router = express.Router();
const udp = require("dgram");
const client = udp.createSocket("udp4");

function SendUDPMessages(msg, ip) {
    const data = JSON.stringify({data:msg})
    //console.log(data)
    console.log(msg)
    client.send(msg, 7124, ip, function (error) {
      if (error) {
        console.log(error);
        client.close();
      } else {
        console.log("Data is sent !");
      }
    });
  }

const IP_ENGINE_WALL = "192.168.70.116"

router.post("/", function (req, res, next) {
    try {
      const { data } = req.body;
      //console.log({ data });
      SendUDPMessages(data, IP_ENGINE_WALL);
      res.json({ message: "UDP messages sent" });
    } catch (err) {
      console.error("Error while sending UDP messages: ", err.message);
    
    }
  });

module.exports = router;