require('dotenv').config();
const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./models');

db.sequelize.authenticate()
  .then(() => console.log("Conectado a la BD"))
  .catch(err => console.log("Error BD:", err));

const alquilerR = require('./routes/alquilerroutes');
const autosR = require('./routes/autosroutes');
const clientesR = require('./routes/clienteroutes');

// Definir el puerto con un valor predeterminado
const PORT = process.env.PORT || 6000;

// Middleware para analizar JSON
app.use(express.json());

// Prefijos para cada conjunto de rutas
app.use('/api/alquiler', alquilerR);
app.use('/api/autos', autosR);
app.use('/api/clientes', clientesR);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
console.log("DATABASE_URL:", process.env.DATABASE_URL);

app.use((err, req, res, next) => {
  console.error("ERROR GLOBAL:", err);
  res.status(500).json({
    mensaje: err.message,
    errorCompleto: err
  });
});