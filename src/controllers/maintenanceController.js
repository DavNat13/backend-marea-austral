const MaintenanceLog = require('../models/MaintenanceLog');

// 1. Guardar un nuevo mantenimiento (CREATE)
exports.createLog = async (req, res) => {
    try {
        const { userId, date, description, cost, engineHours, photoUri } = req.body;
        
        const newLog = new MaintenanceLog({
            userId,
            date,
            description,
            cost,
            engineHours,
            photoUri
        });

        const savedLog = await newLog.save();
        res.status(201).json(savedLog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al guardar mantenimiento' });
    }
};

// 2. Obtener todos los mantenimientos de un usuario (READ)
exports.getLogsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        // Buscamos solo los logs que pertenezcan a este usuario
        const logs = await MaintenanceLog.find({ userId }).sort({ date: -1 });
        res.json(logs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener mantenimientos' });
    }
};

// 3. Eliminar un mantenimiento (DELETE) - "Bonus" para impresionar
exports.deleteLog = async (req, res) => {
    try {
        const { id } = req.params;
        await MaintenanceLog.findByIdAndDelete(id);
        res.json({ msg: 'Mantenimiento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar' });
    }
};