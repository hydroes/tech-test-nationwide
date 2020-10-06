"use strict";

const currentTimestamp = new Date();
const lastMonthTimestamp = new Date(currentTimestamp.setMonth(currentTimestamp.getMonth() - 1));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Transactions",
      [
        {
          amount: 19.20,
          description: "vodafone monthly1",
          category: 'utilities',
          date: currentTimestamp,
          createdAt: currentTimestamp,
          updatedAt: currentTimestamp,
        },
        {
          amount: 10.20,
          description: "vodafone monthly2",
          category: 'utilities',
          date: lastMonthTimestamp,
          createdAt: lastMonthTimestamp,
          updatedAt: lastMonthTimestamp,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Transactions", null, {});
  },
};
// 20180812214425-admin-user-seed.js