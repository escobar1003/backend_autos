const Auto = require("../models/auto");

exports.getAutos = async (req, res) => {
  try {
    const autos = await Auto.findAll();
    res.json(autos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAuto = async (req, res) => {
  try {
    const auto = await Auto.create(req.body);
    res.json(auto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};