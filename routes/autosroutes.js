const express = require('express');
const router = express.Router();

const autosController = require('../controller/autoscontroller');

router.get('/', autosController.autosDisponibles);

// ❌ COMENTA o ELIMINA el POST
// router.post('/', autosController.registrarAuto);

module.exports = router;