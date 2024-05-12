const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '@SITAram5620', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
