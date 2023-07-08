const express = require('express');
const router = express.Router();
const { Movie, User } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in server.js)
const ash = require('express-async-handler');

// There are three approaches to handling the route for getting all movies

/**  1: GET ALL MOVIES: then/catch */
// router.get('/', function(req, res, next) {
//   Movie.findAll({include: [User]})
//     .then(movies => res.status(200).json(movies))
//     .catch(err => next(err));
// });

/**  2: GET ALL MOVIES: async/await */
// router.get('/', async (req, res, next) => {
//   try {
//     let movies = await Movie.findAll({include: [User]});
//     res.status(200).json(movies);
//   } catch(err) {
//     next(err);
//   }
// });

/**  3: GET ALL MOVIES: express-async-handler (ash) */
// automatically catches any error and sends to middleware !!!
// same as using try/catch and calling next(error)
router.get('/', ash(async(req, res) => {
    //{include: [User]}
    let movies = await Movie.findAll();
    res.status(200).json(movies);
}));

/** GET MOVIE BY ID */
router.get('/:id', ash(async(req, res) => {
    let movie = await Movie.findByPk(req.params.id, {include: [User]});
    res.status(200).json(movie);
}));

/** ADD NEW MOVIE */
router.post('/', function(req, res, next) {
    Movie.create(req.body)
      .then(createdMovie => res.status(200).json(createdMovie))
      .catch(err => next(err));
});

/** DELETE MOVIE */
router.delete('/:id', function(req, res, next) {
    Movie.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => res.status(200).json("Deleted a movie!"))
      .catch(err => next(err));
});

/******************* EDIT *********************/

router.put('/:id', ash(async(req, res) => {
    await Movie.update(req.body,
          { where: {id: req.params.id} }
    );
    let movie = await Movie.findByPk(req.params.id);
    res.status(201).json(movie);
  }));
  
  // Export our router, so that it can be imported to construct our apiRouter;
  module.exports = router;