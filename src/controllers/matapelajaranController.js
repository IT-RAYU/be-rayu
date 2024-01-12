const Matapelajaran = require('../models/Matapelajaran');

// Get all matapelajaran
exports.getAllMatapelajaran = async (req, res) => {
  try {
    const matapelajaran = await Matapelajaran.find();
    res.status(200).json(matapelajaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get matapelajaran by ID
exports.getMatapelajaranById = async (req, res) => {
  try {
    const matapelajaran = await Matapelajaran.findById(req.params.id);
    if (matapelajaran) {
      res.status(200).json(matapelajaran);
    } else {
      res.status(404).json({ message: 'Mata Pelajaran not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create matapelajaran
exports.createMatapelajaran = async (req, res) => {
  const matapelajaran = new Matapelajaran({
    nama: req.body.nama,
    guru_pengajar: req.body.guru_pengajar,
    kelas: req.body.kelas,
  });

  try {
    const newMatapelajaran = await matapelajaran.save();
    res.status(201).json(newMatapelajaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update matapelajaran
exports.updateMatapelajaran = async (req, res) => {
  try {
    const matapelajaran = await Matapelajaran.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (matapelajaran) {
      res.status(200).json(matapelajaran);
    } else {
      res.status(404).json({ message: 'Mata Pelajaran not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete matapelajaran
exports.deleteMatapelajaran = async (req, res) => {
  try {
    const deletedMatapelajaran = await Matapelajaran.findByIdAndDelete(req.params.id);
    if (deletedMatapelajaran) {
      res.status(200).json({ message: 'Mata Pelajaran deleted successfully' });
    } else {
      res.status(404).json({ message: 'Mata Pelajaran not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
