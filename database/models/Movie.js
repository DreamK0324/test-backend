const Sequelize = require('sequelize');
const db = require('../db');

const Movie = db.define("movie", {

    title: {
        type: Sequelize.STRING,
        alloNull: false
    },

    releaseDate: {
        type: Sequelize.DATE,
    },
    
    rate: {
        type: Sequelize.FLOAT
    }

});

module.exports = Movie;