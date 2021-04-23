require('dotenv').config({ path: __dirname + '/../../.env'})
console.log(process.env.DB_NAME, process.env.DB_PW, process.env.DB_USER)
console.log( __dirname + '../../.env')
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
