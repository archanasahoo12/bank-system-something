const express = require('express');
const bodyParser = require('body-parser');
const { z } = require('zod');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();

const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
