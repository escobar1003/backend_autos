exports.autosDisponibles = async (req, res, next) => {
    try {
        const autos = await Autos.findAll({
            where: { disponibilidad: 1 }
        });

        res.json(autos);

    } catch (error) {
        next(error); // 👈 IMPORTANTE
    }
};