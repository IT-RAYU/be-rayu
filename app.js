const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');  // Menambahkan baris ini
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
const guruRoutes = require('./src/routes/guruRoutes');
const siswaRoutes = require('./src/routes/siswaRoutes');
const kehadiranRoutes = require('./src/routes/kehadiranRoutes');
const matapelajaranRoutes = require('./src/routes/matapelajaranRoutes');

app.use('/guru', guruRoutes);
app.use('/siswa', siswaRoutes);
app.use('/kehadiran', kehadiranRoutes);
app.use('/matapelajaran', matapelajaranRoutes);

// Connect to MongoDB
connectDB();  // Mengganti baris yang terkait dengan koneksi MongoDB

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
