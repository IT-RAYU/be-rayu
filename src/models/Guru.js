const mongoose = require('mongoose');

const guruSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  matapelajaran: [String],
});

module.exports = mongoose.model('Guru', guruSchema);
