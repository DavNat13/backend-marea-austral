const User = require('../models/User');

exports.syncUser = async (req, res) => {
    const { firebaseUid, email } = req.body;

    try {
        let user = await User.findOne({ firebaseUid });

        if (!user) {
            // Si no existe, lo creamos. Por defecto será 'capitan' para que tú puedas probar
            user = new User({ firebaseUid, email, role: 'capitan' });
            await user.save();
            return res.status(201).json({ msg: 'Usuario creado en Nube', role: user.role });
        }

        // Si ya existe, devolvemos su rol actual
        res.json({ msg: 'Usuario sincronizado', role: user.role });
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
};