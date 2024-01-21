import React from 'react';

const TransactionItem = ({ transaction }) => {
  const { sender, receiver, amount, timestamp } = transaction;

  return (
    <div className='bg-white rounded-md p-4 shadow-md'>
      <h2 className='text-lg font-semibold mb-2'>
        Transaction ID: {transaction._id}
      </h2>
      <div className='mb-2'>
        <strong>Sender:</strong> {sender.firstName} {sender.lastName} (Account
        No: {sender.accountNumber})
      </div>
      <div className='mb-2'>
        <strong>Receiver:</strong> {receiver.firstName} {receiver.lastName}{' '}
        (Account No: {receiver.accountNumber})
      </div>
      <div className='mb-2'>
        <strong>Amount:</strong> [{amount} RS]
      </div>
      <div className='mb-2'>
        <strong>Timestamp:</strong> {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;
