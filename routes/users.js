const express = require('express');
const router = express.Router();
const { Movie, User } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in server.js)
const ash = require('express-async-handler');


/** GET ALL USERS */
router.get('/', ash(async(req, res) => {
    let users = await User.findAll({include: [Movie]});
    res.status(200).json(users);
}));
  
/** GET USER BY ID*/
router.get('/:id', ash(async(req, res) => {
    let user = await User.findByPk(req.params.id, {include: [Movie]});
    res.status(200).json(user);
}));

// Delete user
router.delete('/:id', ash(async(req, res) => {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json("User deleted");
}));

// Add new user
router.post('/', ash(async(req, res) => {
    let newUser = await User.create(req.body);
    res.status(200).json(newUser);
}));

// Edit user
router.put('/:id', ash(async(req, res) => {
    await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    let user = await User.findByPk(req.params.id, {include: [Movie]});
    res.status(201).json(user);
}))
  
// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;