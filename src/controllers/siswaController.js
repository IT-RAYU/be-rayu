const Siswa = require('../models/Siswa');

// Get All Siswa
exports.getAllSiswa = async (req, res) => {
  try {
    const siswa = await Siswa.find();
    res.status(200).json({ status: 200, data: siswa, message: 'Data retrieved successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Get Siswa by ID
exports.getSiswaById = async (req, res) => {
  try {
    const siswa = await Siswa.findById(req.params.id);
    if (!siswa) {
      res.status(404).json({ status: 404, message: 'Siswa not found' });
      return;
    }
    res.status(200).json({ status: 200, data: siswa, message: 'Data retrieved successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Create Siswa
exports.createSiswa = async (req, res) => {
  const siswa = new Siswa({
    nama: req.body.nama,
    kelas: req.body.kelas,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  try {
    const newSiswa = await siswa.save();
    res.status(201).json({ status: 201, data: newSiswa, message: 'Siswa created successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Update Siswa
exports.updateSiswa = async (req, res) => {
  try {
    const siswa = await Siswa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!siswa) {
      res.status(404).json({ status: 404, message: 'Siswa not found' });
      return;
    }
    res.status(200).json({ status: 200, data: siswa, message: 'Siswa updated successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

// Delete Siswa
exports.deleteSiswa = async (req, res) => {
  try {
    const siswa = await Siswa.findByIdAndRemove(req.params.id);
    if (!siswa) {
      res.status(404).json({ status: 404, message: 'Siswa not found' });
      return;
    }
    res.status(200).json({ status: 200, message: 'Siswa deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};
