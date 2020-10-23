const router = require('express').Router();

const { 
    getAll,
    getRandom,
    getAuthors
} = require('../controllers/index.controller');

router.get('/all', getAll);
router.get('/random', getRandom);
router.get('/authors', getAuthors);

module.exports = router;