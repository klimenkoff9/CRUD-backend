const express = require('express');
const router = express.Router();
const { Player } = require('../database/models');

router.get('/', function(req, res, next) {
  Player.findAll()
    .then(players => res.json(players))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
