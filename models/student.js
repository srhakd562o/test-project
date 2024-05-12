const { DataTypes } = require('sequelize');
const sequelize = require('../util/databases');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Add more fields as needed
});

module.exports = Student;
