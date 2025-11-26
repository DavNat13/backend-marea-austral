const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// 1. Conexión a Base de Datos
connectDB();

// 2. Middlewares (Seguridad y formatos)
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Aumentamos límite por si las fotos/rutas son pesadas

// 3. Rutas (Microservicios)
// Aquí definimos los puntos de entrada de tu API
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/trips', require('./routes/tripRoutes'));          
app.use('/api/maintenance', require('./routes/maintenanceRoutes')); 

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`🚀 Servidor Marea Austral FULL corriendo en puerto ${PORT}`);
    console.log(`Endpoint Auth: http://localhost:${PORT}/api/auth`);
    console.log(`Endpoint Viajes: http://localhost:${PORT}/api/trips`);
    console.log(`Endpoint Mantención: http://localhost:${PORT}/api/maintenance`);
});