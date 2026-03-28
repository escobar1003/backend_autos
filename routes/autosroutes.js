const express = require('express');
const router = express.Router();

const autosController = require('../controller/autoscontroller');

router.get('/', autosController.autosDisponibles);
router.post('/crear', autosController.registrarAuto);

module.exports = router;