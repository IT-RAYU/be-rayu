const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
  nama: String,
  kelas: String,
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model('Siswa', siswaSchema);
