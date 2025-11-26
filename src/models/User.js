const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firebaseUid: { type: String, required: true, unique: true }, // Enlace con tu App Android
    email: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['capitan', 'tripulante', 'fiscalizador', 'invitado'], 
        default: 'capitan' 
    },
    createdAt: { type: Date, default: Date.now }
});

// Roles explicados para la defensa:
// 1. Capitan: Admin total (Lee y Escribe todo).
// 2. Tripulante: Pescador (Registra capturas, pero no puede borrar viajes).
// 3. Fiscalizador: Sernapesca (Solo lectura, para auditar).
// 4. Invitado: Turista (Solo ve dashboard de clima).

module.exports = mongoose.model('User', userSchema);