
// const Sequelize = require("sequelize");
const dbConfig = require("../config/config.json").development;
const Transaction = require("../models").Transaction;
const sequelize = require('../utils/sequelize-connection-factory')

module.exports = async (req, res) => {
  try {
    // 
    const { startDate = '2017-08-29', endDate = '2025-08-29', groupBy = 'MONTH' } = req;
    // INPUT DATA should always be checked and never passed into queries like this!
    const query = `SELECT SUM(amount) as totalSum 
            FROM Transactions
            GROUP BY ${groupBy}(CONVERT("${startDate}", DATE)), MONTH(CONVERT("${endDate}", DATE)) `

    const insights = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT })

    res.send(insights);
  } catch (error) {
    res.status(500).send(error);
  }
}