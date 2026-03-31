const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const autosRoutes = require("./routes/autosRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/autos", autosRoutes);

// Ruta base (IMPORTANTE para evitar error en Render)
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Conectar BD
sequelize.sync()
  .then(() => console.log("BD conectada"))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT);
});