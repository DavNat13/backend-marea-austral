const mongoose = require('mongoose');

const maintenanceLogSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Vincula el registro al usuario de Firebase
    date: { type: Number, required: true },   // Guardamos fecha como Timestamp (Long en Android)
    description: { type: String, required: true },
    cost: { type: Number, required: true },
    engineHours: { type: Number },            // Opcional, como en tu App
    photoUri: { type: String },               // Guardaremos la referencia (string) por ahora
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MaintenanceLog', maintenanceLogSchema);