const Sequelize = require("sequelize");

const dbConfig = require("../config/config.json").development;

module.exports = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});