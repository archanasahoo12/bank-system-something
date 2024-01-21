const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const User = require('../models/user');

// GET ALL TRANSACTIONS - ROUTE
router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find({})
      .populate('sender', 'firstName lastName email accountNumber balance')
      .populate('receiver', 'firstName lastName email accountNumber balance');
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/transaction', async (req, res) => {
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const amount = req.body.amount;

  try {
    // CREATE TRANSACTION
    await Transaction.create({
      sender: sender,
      receiver: receiver,
      amount: Number(amount),
    });

    // CHECKING IF SENDER HAS ENOUGH MONEY AND AMOUNT IS LESS
    // THAN SENDER'S BALANCE
    const senderData = await checkSender(sender, amount);
    if (senderData.success) {
      const isSenderUpdated = await updateSenderBalance(sender, amount);
      if (isSenderUpdated.success) {
        const isReceiverUpdated = await updateReceiverBalance(receiver, amount);
        res.status(200).json(isReceiverUpdated);
      } else {
        console.log(isSenderUpdated.message);
        res.status(400).json({
          message: isSenderUpdated.message,
        });
      }
    } else {
      console.log(senderData.message);
      res.status(400).json({
        message: checkSender.message,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

async function checkSender(sender, amount) {
  console.log(sender, amount);
  try {
    // SEARCHING FOR SENDER
    // RETRIEVING BALANCE
    const { balance } = await User.findById(sender);
    if (amount > balance) {
      return {
        success: false,
        message: "Sender doesn't have enough balance",
      };
    } else if (amount < 0) {
      return {
        success: false,
        message: 'Amount is less than 0',
      };
    } else {
      return {
        success: true,
        message: "Sender doesn't has enough balance",
      };
    }
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
}

async function updateSenderBalance(sender, amount) {
  console.log(amount);
  try {
    const { balance } = await User.findById(sender);

    await User.findByIdAndUpdate(sender, {
      balance: balance - amount,
    });
    return {
      success: true,
      message: "Money deducted from sender's account",
    };
  } catch (err) {
    return {
      success: false,
      message: "Could not deduct money from sender's account",
    };
  }
}

async function updateReceiverBalance(receiver, amount) {
  try {
    const { balance } = await User.findById(receiver);
    await User.findByIdAndUpdate(receiver, {
      balance: balance + amount,
    });
    return {
      success: true,
      message: "Money credited to receiver's account",
    };
  } catch (err) {
    return {
      success: false,
      message: 'Could not update',
    };
  }
}

module.exports = router;
