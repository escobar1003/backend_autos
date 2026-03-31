const express = require("express");
const cors = require("cors");
require("dotenv").config();

const autosRoutes = require("./routes/autosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/autos", autosRoutes);

// ruta base
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo");
});