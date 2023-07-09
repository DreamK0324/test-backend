// register models, set up associations between tables, and generate barrel file for the models;

const Movie  = require('./Movie');
const User  = require('./User');

Movie.belongsTo(User);
User.hasMany(Movie);

module.exports = {
  Movie,
  User
};