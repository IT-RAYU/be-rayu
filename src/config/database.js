const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB connection error:');
    if (error instanceof mongoose.Error) {
      // Handle Mongoose-specific errors
      console.error('Mongoose Error:', error.message);
    } else {
      // Handle generic errors
      console.error('Generic Error:', error.message);
    }
    process.exit(1);
  }
};

module.exports = connectDB;
