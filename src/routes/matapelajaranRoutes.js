const express = require('express');
const router = express.Router();
const matapelajaranController = require('../controllers/matapelajaranController');

// Routes for Matapelajaran
router.get('/', matapelajaranController.getAllMatapelajaran);
router.get('/:id', matapelajaranController.getMatapelajaranById);
router.post('/', matapelajaranController.createMatapelajaran);
router.put('/:id', matapelajaranController.updateMatapelajaran);
router.delete('/:id', matapelajaranController.deleteMatapelajaran);

module.exports = router;
