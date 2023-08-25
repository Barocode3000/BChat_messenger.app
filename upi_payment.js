import React from 'react';

const UpiPayment = ({
  receiverUpiId,
  receiverName,
  transactionRefId,
  transactionNote,
  transactionId,
  isTransactionSuccessful,
  upiApp,
  amount,
}) => {
  return {
    receiverUpiId,
    receiverName,
    transactionRefId,
    transactionNote,
    transactionId,
    isTransactionSuccessful,
    upiApp,
    amount,
  };
};

export default UpiPayment;
