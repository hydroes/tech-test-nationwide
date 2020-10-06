'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    customerId: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    category: DataTypes.STRING,
    merchantOrSender: DataTypes.STRING,

  }, {});
  Transaction.associate = function (models) {
    // associations can be defined here
  };
  return Transaction;
};