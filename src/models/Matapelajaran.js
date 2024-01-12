const mongoose = require('mongoose');

const matapelajaranSchema = new mongoose.Schema({
  nama: String,
  guru_pengajar: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guru' }],
  kelas: [String],
});

module.exports = mongoose.model('Matapelajaran', matapelajaranSchema);
