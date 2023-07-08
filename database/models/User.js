const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define("user", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
  }


});

module.exports = User;