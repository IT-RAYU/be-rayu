const Guru = require('../models/Guru');

// Get all guru
exports.getAllGuru = async (req, res) => {
  try {
    const guru = await Guru.find();
    res.status(200).json({ status: 200, data: guru, message: 'Data retrieved successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Get guru by ID
exports.getGuruById = async (req, res) => {
  try {
    const guru = await Guru.findById(req.params.id);
    if (guru) {
      res.status(200).json({ status: 200, data: guru, message: 'Data retrieved successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Guru not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Create a new guru
exports.createGuru = async (req, res) => {
  const guru = new Guru({
    nama: req.body.nama,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    matapelajaran: req.body.matapelajaran || [],
  });

  try {
    const newGuru = await guru.save();
    res.status(201).json({ status: 201, data: newGuru, message: 'Guru created successfully' });
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

// Update guru by ID
exports.updateGuru = async (req, res) => {
  try {
    const guru = await Guru.findById(req.params.id);

    if (guru) {
      guru.nama = req.body.nama || guru.nama;
      guru.username = req.body.username || guru.username;
      guru.password = req.body.password || guru.password;
      guru.email = req.body.email || guru.email;
      guru.matapelajaran = req.body.matapelajaran || guru.matapelajaran;

      const updatedGuru = await guru.save();
      res.status(200).json({ status: 200, data: updatedGuru, message: 'Guru updated successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Guru not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Delete guru by ID
exports.deleteGuru = async (req, res) => {
  try {
    const guru = await Guru.findByIdAndDelete(req.params.id);
    if (guru) {
      res.status(200).json({ status: 200, message: 'Guru deleted successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Guru not found' });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};
