const express = require('express');
const router = express.Router();
const kehadiranController = require('../controllers/kehadiranController');

// Routes for Kehadiran
router.get('/', kehadiranController.getAllKehadiran);
router.get('/:id', kehadiranController.getKehadiranById);
router.post('/', kehadiranController.createKehadiran);
router.put('/:id', kehadiranController.updateKehadiran);
router.delete('/:id', kehadiranController.deleteKehadiran);

module.exports = router;
