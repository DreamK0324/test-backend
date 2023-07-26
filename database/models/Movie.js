const Sequelize = require('sequelize');
const db = require('../db');

const Movie = db.define("movie", {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    releaseDate: {
        type: Sequelize.DATE,
    },
    
    rate: {
        type: Sequelize.NUMBER,
    },

});

module.exports = Movie;