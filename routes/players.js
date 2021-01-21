const express = require('express');
const router = express.Router();
const { Player } = require('../database/models'); // imports the models from database

router.get('/', function(req, res, next) {
  Player.findAll()
    .then(players => res.json(players))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
