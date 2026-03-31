const express = require("express");
const router = express.Router();
const autosController = require("../controllers/autosController");

router.get("/", autosController.getAutos);
router.post("/", autosController.createAuto);

module.exports = router;