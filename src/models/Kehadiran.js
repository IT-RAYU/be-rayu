const mongoose = require('mongoose');

const kehadiranSchema = new mongoose.Schema({
  tanggal: Date,
  guru_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Guru' },
  siswa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Siswa' },
  status: {
    type: String,
    enum: ['Hadir', 'Tidak Hadir', 'Izin'],
    default: 'Tidak Hadir',
  },
});

module.exports = mongoose.model('Kehadiran', kehadiranSchema);
