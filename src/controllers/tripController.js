const Trip = require('../models/Trip');

exports.saveTrip = async (req, res) => {
    try {
        const tripData = req.body; // Recibe el objeto Trip completo desde Android
        const newTrip = new Trip(tripData);
        await newTrip.save();
        res.status(201).json({ msg: 'Viaje sincronizado exitosamente', id: newTrip._id });
    } catch (error) {
        console.error("Error guardando viaje:", error);
        res.status(500).json({ msg: 'Error en servidor' });
    }
};

exports.getTripsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const trips = await Trip.find({ userId }).sort({ startTime: -1 });
        res.json(trips);
    } catch (error) {
        res.status(500).json({ msg: 'Error obteniendo viajes' });
    }
};