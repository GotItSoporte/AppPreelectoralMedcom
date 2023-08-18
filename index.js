const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;



app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/SendInfoForm", require("./routes/FormLoad"));
app.use("/ReadDataSql", require("./routes/ReadSql"));
app.use("/Createxml", require("./routes/Createxml"));
app.use("/SendDeleteData", require("./routes/DeleteData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
