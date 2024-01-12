const express = require('express');
const router = express.Router();
const guruController = require('../controllers/guruController');

// Routes for Guru
router.get('/', guruController.getAllGuru);
router.get('/:id', guruController.getGuruById);
router.post('/', guruController.createGuru);
router.put('/:id', guruController.updateGuru);
router.delete('/:id', guruController.deleteGuru);

module.exports = router;
