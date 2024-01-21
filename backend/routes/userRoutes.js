const express = require('express');
const router = express.Router();
const User = require('../models/user');
const fs = require('fs/promises');
const path = require('path');
// GET ALL USERS - ROUTE

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE A NEW USER - ROUTE
router.post('/user', async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const accountNumber = req.body.accountNumber;
  const balance = req.body.balance;
  try {
    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      accountNumber: accountNumber,
      balance: balance,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// GET A SPECIFIC USER BY ID - ROUTE
router.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function createFakeData() {
  try {
    const currentDirectory = process.cwd();
    console.log('Current working directory:', currentDirectory);

    // Check if there is existing data in the database
    const existingUsers = await User.find();

    if (existingUsers.length === 0) {
      // If no existing data, then create and save fake data
      const jsonContent = await fs.readFile(
        path.join(currentDirectory, 'fakeData.json'),
        { encoding: 'utf-8' }
      );
      const fakeData = JSON.parse(jsonContent);

      for (const userData of fakeData) {
        await User.create(userData);
      }

      console.log('Fake data created and saved successfully.');
    } else {
      console.log('Data already exists. Skipping fake data creation.');
    }
  } catch (error) {
    console.error('Error creating fake data:', error);
  }
}

createFakeData();

module.exports = router;
