const router = require('express').Router();

const { 
    getAll,
    getRandom
} = require('../controllers/index.controller');

router.get('/all', getAll);
router.get('/random', getRandom);

module.exports = router;