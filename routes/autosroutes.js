const express = require('express');
const router = express.Router();

const autosController = require('../controller/autoscontroller');

router.get('/', autosController.autosDisponibles);

module.exports = router;