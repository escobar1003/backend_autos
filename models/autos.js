const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Auto = sequelize.define("Auto", {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Auto;