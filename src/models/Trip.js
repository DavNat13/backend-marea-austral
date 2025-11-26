const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // UID de Firebase
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    distanceInMeters: { type: Number },
    // AQUI está la magia: Guardamos las coordenadas como Objeto, no como String
    routeCoordinates: [{
        latitude: Number,
        longitude: Number
    }],
    syncedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trip', tripSchema);