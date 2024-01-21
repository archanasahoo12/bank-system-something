const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/bank');
    console.log('Connected to the DB');
  } catch (err) {
    console.error('Could not connect to the DB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
