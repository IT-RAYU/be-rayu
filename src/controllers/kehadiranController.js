const Kehadiran = require('../models/Kehadiran');

// Get all kehadiran
exports.getAllKehadiran = async (req, res) => {
  try {
    const kehadiran = await Kehadiran.find();
    res.status(200).json({ status: 200, data: kehadiran, message: 'Data retrieved successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Get kehadiran by ID
exports.getKehadiranById = async (req, res) => {
  try {
    const kehadiran = await Kehadiran.findById(req.params.id);
    if (!kehadiran) {
      res.status(404).json({ status: 404, message: 'Kehadiran not found' });
      return;
    }
    res.status(200).json({ status: 200, data: kehadiran, message: 'Data retrieved successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Create kehadiran
exports.createKehadiran = async (req, res) => {
  const kehadiran = new Kehadiran({
    tanggal: req.body.tanggal,
    guru_id: req.body.guru_id,
    siswa_id: req.body.siswa_id,
    status: req.body.status || 'Tidak Hadir',
  });

  try {
    const newKehadiran = await kehadiran.save();
    res.status(201).json({ status: 201, data: newKehadiran, message: 'Kehadiran created successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Update kehadiran
exports.updateKehadiran = async (req, res) => {
  try {
    const kehadiran = await Kehadiran.findById(req.params.id);
    if (!kehadiran) {
      res.status(404).json({ status: 404, message: 'Kehadiran not found' });
      return;
    }

    kehadiran.tanggal = req.body.tanggal || kehadiran.tanggal;
    kehadiran.guru_id = req.body.guru_id || kehadiran.guru_id;
    kehadiran.siswa_id = req.body.siswa_id || kehadiran.siswa_id;
    kehadiran.status = req.body.status || kehadiran.status;

    const updatedKehadiran = await kehadiran.save();
    res.status(200).json({ status: 200, data: updatedKehadiran, message: 'Kehadiran updated successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Delete kehadiran
exports.deleteKehadiran = async (req, res) => {
  try {
    const kehadiran = await Kehadiran.findById(req.params.id);
    if (!kehadiran) {
      res.status(404).json({ status: 404, message: 'Kehadiran not found' });
      return;
    }

    await kehadiran.remove();
    res.status(200).json({ status: 200, message: 'Kehadiran deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};
