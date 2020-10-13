const router = require('express').Router();

const { getAll } = require('../controllers/index.controller');

router.get('/all', getAll);

module.exports = router;