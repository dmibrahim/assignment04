const express = require('express');
const router = express.Router();
const gamesController = require('../controller/gameController');


const path = '/api/games/';
router.get(path,gamesController.findAll )
router.get(path+':gameId',gamesController.findoneGame )



module.exports = router;