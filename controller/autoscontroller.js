const { Autos } = require('../models'); // 👈 ESTO ES CLAVE

exports.autosDisponibles = async (req, res) => {
    try {
        const autos = await Autos.findAll({
            where: { disponibilidad: 1 }
        });

        res.json(autos);

    } catch (error) {
        console.log("ERROR REAL:", error); // 👈 para ver en logs
        res.status(500).json({
            mensaje: "error",
            error: error.message
        });
    }
};