const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

// POST: http://localhost:3000/api/maintenance
router.post('/', maintenanceController.createLog);

// GET: http://localhost:3000/api/maintenance/user/:userId
router.get('/user/:userId', maintenanceController.getLogsByUser);

// DELETE: http://localhost:3000/api/maintenance/:id
router.delete('/:id', maintenanceController.deleteLog);

module.exports = router;