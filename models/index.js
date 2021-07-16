const dbConfig = require("../config/db.config.js");
const fs = require('fs');
const path = require('path');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: 25060,
  dialect: dbConfig.dialect,
//   operatorsAliases: false
  ssl: {
    ca : fs.readFileSync(path.join(__dirname + "/ca-certificate.crt"))
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
